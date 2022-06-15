import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setPlayerSearchResult } from '../redux/playerSlice';

const Form = styled.form``;

const TextField = styled.input`
	width: 400px;
	background-color: transparent;
	border-top: solid 2px #888888;
	border-bottom: solid 2px #888888;
	border-left: solid 2px #888888;
	border-right: none;
	color: #888888;
	font-size: 1rem;
	padding: 20px 10px;
	font-size: 1.2rem;
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
	&:focus {
		background-color: transparent;
		outline: 0 none;
		border-color: #fca311;
	}
	::placeholder {
		color: #888888;
		align-items: center;
	}
`;

const CustomButton = styled.input`
	height: 100%;
	background-color: transparent;
	border: solid 2px #888888;
	color: #888888;
	cursor: pointer;
	font-size: 1.2rem;
	padding: 0 25px;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
	&:hover {
		color: #fca311;
		border: solid 2px #fca311;
	}
`;

const SearchBar = () => {
	const [search, setSearch] = useState('');
	const dispatch = useDispatch();

	const getPlayer = e => {
		try {
			setSearch(e.target.value);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(setPlayerSearchResult(search));
	};

	return (
		<Form onSubmit={e => handleSubmit(e)}>
			<TextField
				type="text"
				placeholder="Rechercher un joueur.."
				id="search-input"
				onChange={e => getPlayer(e)}
			/>
			<CustomButton type="submit" value="Envoyer" />
		</Form>
	);
};

export default SearchBar;
