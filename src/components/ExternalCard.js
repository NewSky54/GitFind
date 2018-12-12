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
	:hover {
		border: 4px solid grey;
	}
`;

const Title = styled.div`
	font-size: 16px;
`;

class ExternalCard extends Component {
	state = {};
	render() {
		return (
			<Container>
				<Title>Top External Contributors</Title>
			</Container>
		);
	}
}

export default ExternalCard;
