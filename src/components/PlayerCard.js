import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setPlayerId } from '../redux/playerSlice';

const Card = styled.div`
	font-size: 1.1rem;
	background-color: #000;
	color: #acacac;
	font-weight: 600;
	width: 150px;
	padding: 15px;
	cursor: pointer;
	text-align: center;
	border-radius: 5px;
	border: 2px solid #c7c7c7;
	&:hover {
		color: #fca311;
		border: 2px solid #fca311;
	}
`;

const Text = styled.p`
	font-weight: 700;
`;

const PlayerCard = ({ player }) => {
	const dispatch = useDispatch();

	const getPlayerStats = () => {
		let storedData = window.localStorage.playerId
			? window.localStorage.playerId.split(',')
			: [];
		storedData.push(player.id);
		window.localStorage.playerId = storedData;

		const id = player.id;
		dispatch(setPlayerId(id));
	};

	return (
		<Card onClick={getPlayerStats}>
			<Text>
				{player?.first_name} {player?.last_name}
			</Text>
		</Card>
	);
};

export default PlayerCard;
