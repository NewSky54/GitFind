import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
	width: 100%;
	height: 40%;
	background: #fdfeff;
	border-radius: 5px;
	box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
	border: 1px solid #d2c6c6;
	margin: auto;
	border: 4px solid #eeb83b;
	overflow: scroll;
	:hover {
		border: 4px solid grey;
	}
`;

const Wrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.div`
	font-size: 16px;
`;

const ClickTitle = styled.div`
	font-size: 24px;
	color: #eeb83b;
	font-family: 'Roboto Slab';
`;

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Img = styled.img`
	height: 100px;
`;

class InternalCard extends Component {
	render() {
		const { contributors, showLoading } = this.props;
		return (
			<Container>
				{showLoading ? (
					<ClickTitle>
						Click on a repo's name to see the top internal contributors!
					</ClickTitle>
				) : (
					<Wrap>
						<Title>Top Internal Contributors</Title>
						<Row>
							{contributors.data.map(val => (
								<Column key={val.id}>
									<Img src={val.avatar_url} />
									<div>{val.login}</div>
									<div>{val.contributions}</div>
								</Column>
							))}
						</Row>
					</Wrap>
				)}
			</Container>
		);
	}
}

export default InternalCard;
