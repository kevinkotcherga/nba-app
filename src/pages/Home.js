import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
	background-color: #212121;
	min-height: 100vh;
`;

const Home = () => {
	return (
		<Container>
			<Navbar />
		</Container>
	);
};

export default Home;
