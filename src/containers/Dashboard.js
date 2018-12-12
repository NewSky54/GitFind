import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import backgroundImg from './../../dist/assets/home-background.jpg';
import LeftCard from './../components/LeftCard';
import InternalCard from './../components/InternalCard';
import ExternalCard from './../components/ExternalCard';

// ---------------------------------------
// Dashboard Styles
// ---------------------------------------
const Layout = styled.div`
	height: 100%;
	width: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url(${backgroundImg}) center center no-repeat;
	background-size: cover;
`;

const Title = styled.div`
	line-height: 1.4;
	letter-spacing: 2px;
	color: #eeb83b;
	font-family: 'Roboto Slab';
	font-size: 100px;
	display: flex;
	align-content: center;
	justify-content: center;
`;

const CardContainer = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: space-between;
`;

const RightColumn = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	margin-right: 60px;
`;
// ---------------------------------------

class Dashboard extends Component {
	state = {
		contributors: null,
		showLoading: true
	};

	handleNameClick = name => {
		const { organizationName } = this.props;
		axios
			.get(
				`https://api.github.com/repos/${organizationName}/${name}/contributors`
			)
			.then(data => {
				this.setState({ contributors: data, showLoading: false });
			})
			.catch(err => console.log(`Error in Search`, err));
	};

	render() {
		const { contributors, organizationName, showLoading } = this.state;
		const { org } = this.props;

		return (
			<Layout>
				<Title>Dashboard</Title>
				<CardContainer>
					<LeftCard
						org={this.props.org}
						handleNameClick={this.handleNameClick}
					/>
					<RightColumn>
						{contributors ? (
							<InternalCard
								contributors={contributors}
								showLoading={showLoading}
							/>
						) : (
							<InternalCard showLoading={showLoading} />
						)}
						<ExternalCard />
					</RightColumn>
				</CardContainer>
			</Layout>
		);
	}
}

export default Dashboard;
