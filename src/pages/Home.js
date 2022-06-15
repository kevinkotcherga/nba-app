import React from 'react';
import styled from 'styled-components';
import Chart from '../components/Chart';
import Navbar from '../components/Navbar';
import PlayerSearchResult from '../components/PlayerSearchResult';
import PlayerTable from '../components/PlayerTable';
import SearchHistory from '../components/SearchHistory';

const Container = styled.div`
	background-color: #212121;
	min-height: 100vh;
`;

const Home = () => {
	return (
		<>
			<Container>
				<Navbar />
				<PlayerSearchResult />
				<PlayerTable />
				<Chart />
			</Container>
			<SearchHistory />
		</>
	);
};

export default Home;
