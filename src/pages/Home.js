import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Chart from '../components/Chart';
import Navbar from '../components/Navbar';
import PlayerSearchResult from '../components/PlayerSearchResult';
import PlayerTable from '../components/PlayerTable';
import SearchHistory from '../components/SearchHistory';
import Spinner from '../components/Spinner';

const Container = styled.div`
	background-color: #212121;
	min-height: 100vh;
`;

const Home = () => {
	const playerSearchResult = useSelector(
		state => state.player.playerSearchResult,
	);
	return (
		<>
			<Container>
				<Navbar />
				{playerSearchResult !== '' ? (
					<>
						<PlayerSearchResult />
						<PlayerTable />
						<Chart />
					</>
				) : (
					<Spinner />
				)}
			</Container>
			<SearchHistory />
		</>
	);
};

export default Home;
