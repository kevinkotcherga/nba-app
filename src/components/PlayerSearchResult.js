import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setPlayerData } from '../redux/playerSlice';
import PlayerCard from './PlayerCard';

const Container = styled.div`
	width: 90vw;
	margin: 100px auto;
	display: flex;
	justify-content: center;
	gap: 20px;
`;

const PlayerSearchResult = () => {
	const dispatch = useDispatch();
	const playerName = useSelector(state => state.player.playerList);
	const playerData = useSelector(state => state.player.player);

	useEffect(() => {
		if (playerName !== null) {
			axios
				.get(
					`https://www.balldontlie.io/api/v1/players?search=${playerName}&per_page=10`,
				)
				// .then(res => console.log(res.data.data));
				.then(res => dispatch(setPlayerData(res.data.data)));
		}
	}, [dispatch, playerName]);

	return (
		<Container>
			{playerData?.map(player => (
				<PlayerCard player={player} key={player.id} />
			))}
		</Container>
	);
};

export default PlayerSearchResult;
