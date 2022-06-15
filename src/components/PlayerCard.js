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
	cursor: pointer;
	text-align: center;
	border-radius: 5px;
`;

const ContainerName = styled.div`
	border: 2px solid #c7c7c7;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	padding: 15px;
	&:hover {
		color: #fca311;
		border: 2px solid #fca311;
	}
`;

const Button = styled.button`
	background-color: transparent;
	color: #acacac;
	cursor: pointer;
	border-right: 2px solid #c7c7c7;
	border-left: 2px solid #c7c7c7;
	border-bottom: 2px solid #c7c7c7;
	border-top: none;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	padding: 5px;
	width: 100%;
	&:hover {
		color: #fca311;
	}
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
		<Card>
			<ContainerName onClick={getPlayerStats}>
				<p>
					{player?.first_name} {player?.last_name}
				</p>
			</ContainerName>
			{viewable && (
				<Button onClick={e => handleClick(e)}>Voir les statistiques</Button>
			)}
		</Card>
	);
};

export default PlayerCard;
