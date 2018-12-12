import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
	width: 40%;
	height: 100%;
	background: #fdfeff;
	border-radius: 5px;
	box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
	border: 1px solid #d2c6c6;
	margin-left: 60px;
	border: 4px solid #eeb83b;
	overflow: scroll;
	:hover {
		border: 4px solid grey;
	}
`;

const Repo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Title = styled.div`
	line-height: 1.4;
	letter-spacing: 2px;
	font-family: 'Roboto Slab';
	font-size: 30px;
	padding-right: 20px;
	:hover {
		color: #eeb83b;
	}
`;

const Stars = styled.div`
	padding-right: 20px;
	font-size: 25px;
`;

const Forks = styled.div`
	padding-right: 20px;
	font-size: 25px;
`;

const LeftCard = props => {
	return (
		<Container>
			{props.org.map(val => (
				<Repo>
					<Title onClick={() => props.handleNameClick(val.name)}>
						{val.name}
					</Title>
					<Stars>Stars: {val.stargazers_count}</Stars>
					<Forks>Forks: {val.forks}</Forks>
				</Repo>
			))}
		</Container>
	);
};

export default LeftCard;
