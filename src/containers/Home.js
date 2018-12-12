import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import backgroundImg from './../../dist/assets/home-background.jpg';
import magnifyingGlass from './../../dist/assets/magnifying-glass.png';
import keys from './../../credentials';
import Dashboard from './Dashboard';
import LeftCard from './../components/LeftCard';
import InternalCard from './../components/InternalCard';

// ---------------------------------------
// Home Styles
// ---------------------------------------
const Layout = styled.div`
	height: 100%;
	width: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url(${backgroundImg}) center center no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
`;

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	line-height: 1.4;
	letter-spacing: 1px;
	color: #eeb83b;
	font-family: 'Roboto Slab';
	font-size: 90px;
	display: flex;
	align-content: center;
	justify-content: center;
`;

const SubTitle = styled.div`
	max-width: 100%;
	padding: 0px 0 30px 0;
	letter-spacing: 2px;
	font-weight: 500;
	color: rgb(196, 196, 196);
	font-family: 'SF Mono';
	font-weight: 200;
	font-size: 40px;
	padding: 30px 0;
`;

const InputButtonContainer = styled.div`
	display: flex;
	align-items: flex-end;
`;

const Input = styled.input`
	padding: 1rem 0;
	border: 0;
	background: transparent;
	border-bottom: solid 2px rgba(255, 255, 255, 0.25);
	color: white;
	font-size: 50px;
	font-weight: lighter;
	letter-spacing: 1px;
	outline: none;
	width: 400px;
`;

const Img = styled.img`
	width: 40px;
	height: 40px;
	padding: 10px;
	border: 1px solid #eeb83b;
	margin-left: 30px;
	:active {
		border: 1px solid #fff;
	}
`;

const ErrorMessage = styled.div`
	color: #bf493e;
	font-family: 'SF Mono';
	font-size: 20px;
	padding-top: 30px;
`;
// ---------------------------------------

class Home extends Component {
	state = {
		data: null,
		organizationName: '',
		orgName: '',
		incorrectOrg: false,
		redirectToDashboard: false
	};

	handleChange = e => {
		this.setState({ organizationName: e.target.value });
	};

	handleSubmit = e => {
		const { organizationName, redirectToDashboard } = this.state;

		const url = `https://api.github.com/orgs/${organizationName}/repos?client_id=${
			keys.clientID
		}
		&client_secret=${keys.clientSecret}`;
		axios
			.get(url)
			.then(data => {
				this.setState(prevState => ({
					data,
					orgName: organizationName,
					incorrectOrg: false,
					redirectToDashboard: !prevState.redirectToDashboard
				}));
			})
			.catch(err => {
				console.log(`Error in Search`, err);
				this.setState({ incorrectOrg: true });
			});

		this.setState({ organizationName: '' });
	};

	render() {
		const {
			data,
			organizationName,
			orgName,
			incorrectOrg,
			redirectToDashboard
		} = this.state;

		return (
			<Layout>
				{!redirectToDashboard ? (
					<HomeContainer>
						<Title>GitFind - GitHub Organization Finder</Title>
						<InputButtonContainer>
							<Input value={organizationName} onChange={this.handleChange} />
							<Img onClick={this.handleSubmit} src={magnifyingGlass} />
						</InputButtonContainer>
						{incorrectOrg && (
							<ErrorMessage>
								Oops! Looks like that organization doesn't exist. Try again?
							</ErrorMessage>
						)}
						<SubTitle>
							Pull back the curtains by entering a Github Organization!
						</SubTitle>
					</HomeContainer>
				) : (
					<Dashboard org={data.data} organizationName={orgName} />
				)}
			</Layout>
		);
	}
}

export default Home;
