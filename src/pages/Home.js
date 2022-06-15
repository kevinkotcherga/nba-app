import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import PlayerSearchResult from '../components/PlayerSearchResult';

const Container = styled.div`
	background-color: #212121;
	min-height: 100vh;
`;

const Home = () => {
	return (
		<Container>
			<Navbar />
			<PlayerSearchResult />
		</Container>
	);
};

export default Home;
