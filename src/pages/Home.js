import React from 'react';
import styled from 'styled-components';
import Chart from '../components/Chart';
import Navbar from '../components/Navbar';
import PlayerSearchResult from '../components/PlayerSearchResult';
import PlayerTable from '../components/PlayerTable';

const Container = styled.div`
	background-color: #212121;
	min-height: 100vh;
`;

const Home = () => {
	return (
		<Container>
			<Navbar />
			<PlayerSearchResult />
			<PlayerTable />
			<Chart />
		</Container>
	);
};

export default Home;
