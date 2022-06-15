import { JellyfishSpinner } from 'react-spinners-kit';

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 300px;
	text-align: center;
`;

const Wrapper = styled.div`
	width: 500px;
	height: 500px;
	margin: auto;
	transform: translate(0%, 25%);
`;

const Spinner = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<JellyfishSpinner size={500} color="#888888" />
				</Wrapper>
			</Container>
		</div>
	);
};

export default Spinner;
