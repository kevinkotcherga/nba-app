import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setPlayerId } from '../redux/playerSlice';

const Card = styled.div`
	font-size: 1.1rem;
	background-color: transparent;
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

const Button = styled.button`
	margin-top: 20px;
	background-color: transparent;
	color: #acacac;
	padding: 10px;
	border: 1px solid #c7c7c7;
	border-radius: 3px;
	cursor: pointer;
	&:hover {
		color: #fca311;
	}
`;

const Text = styled.p`
	font-weight: 700;
`;

const PlayerCard = ({ player }) => {
	const dispatch = useDispatch();
	const [dataId, setDataId] = useState();
	const [viewable, setViewable] = useState(false);

	const getPlayerStats = () => {
		setViewable(true);
		setDataId(player.id);
	};

	const handleClick = e => {
		e.preventDefault();
		let storedData = window.localStorage.playerId
			? window.localStorage.playerId.split(',')
			: [];
		storedData.push(player.id);
		window.localStorage.playerId = storedData;

		dispatch(setPlayerId({ dataId }));
	};

	return (
		<Card onClick={getPlayerStats}>
			<Text>
				{player?.first_name} {player?.last_name}
			</Text>
			{viewable ? (
				<Button onClick={e => handleClick(e)}>Voir les statistiques</Button>
			) : (
				''
			)}
		</Card>
	);
};

export default PlayerCard;
