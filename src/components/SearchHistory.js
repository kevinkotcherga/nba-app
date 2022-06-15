import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	background-color: #212121;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	overflow: hidden;
	align-items: center;
	border-top: 1px solid #888888;
	padding: 15px;
`;

const Title = styled.div`
	font-weight: 700;
	color: #888888;
`;

const TextContainer = styled.div`
	display: flex;
	gap: 15px;
	margin-right: 20px;
	width: 60vw;
	overflow: hidden;
`;

const NameContainer = styled.div`
	display: flex;
	gap: 4px;
`;

const Text = styled.p`
	color: #888888;
`;

const Button = styled.button`
	background-color: transparent;
	color: #888888;
	cursor: pointer;
	width: 200px;
	padding: 10px;
	border: none;
	&:hover {
		color: #fca311;
	}
`;

const SearchHistory = () => {
	const [playerData, setPlayerData] = useState([]);

	const clearLocalstorageData = () => {
		localStorage.clear();
		window.location.reload();
	};

	const idFromStorage = localStorage.getItem(localStorage.key('playerId'));

	useEffect(() => {
		let arrayOfIds = [];
		arrayOfIds.push(idFromStorage);
		const arrayOfIdsSplit = arrayOfIds[0]?.split(',');

		const getPlayerName = id => {
			const URL = 'https://www.balldontlie.io/api/v1/players/' + id;
			return fetch(URL).then(response => response.json());
		};

		async function populateId() {
			let idArray = [];
			idArray = arrayOfIdsSplit?.map(id => getPlayerName(id));
			return await Promise.all(idArray);
		}

		(async function () {
			const data = await populateId();
			setPlayerData(data);
		})();
	}, [idFromStorage]);

	return (
		<Container>
			<Wrapper>
				<Title>Historique des recherches</Title>
				<TextContainer>
					{playerData
						?.filter(player => player !== undefined)
						?.map((player, index) => (
							<NameContainer key={index}>
								<Text>{player.first_name}</Text>
								<Text>{player.last_name}</Text>
							</NameContainer>
						))}
				</TextContainer>
				<Button onClick={clearLocalstorageData}>Supprimer l'historique</Button>
			</Wrapper>
		</Container>
	);
};

export default SearchHistory;
