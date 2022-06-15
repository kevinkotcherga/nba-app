import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Container = styled.div`
	background-color: #212121;
	border-bottom: solid 1px #888888;
`;

const Wrapper = styled.div`
	padding: 35px 45px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

const Title = styled.h1`
	color: #888888;
	font-weight: 800;
	font-size: 2.1rem;
	&:hover {
		color: #fca311;
		cursor: pointer;
	}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<SearchBar />
				</Left>
				<Right>
					<Title>NBA STATS.</Title>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
