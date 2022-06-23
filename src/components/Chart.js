import React from 'react';
import { useSelector } from 'react-redux';
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import SelectElement from './SelectElement';

const Container = styled.div`
	width: 100%;
	padding: 50px 0 100px 0;
`;

const Wrapper = styled.div`
	width: 95%;
	margin: auto;
`;

const Chart = () => {
	const playerData = useSelector(state => state.player.allPlayerData);
	const playerId = useSelector(state => state.player.playerId);
	const selectValue = useSelector(state => state.select.select);

	return (
		<Container>
			{playerId?.length > 0 && (
				<Wrapper>
					<SelectElement />
					<ResponsiveContainer aspect={3}>
						<BarChart
							width={500}
							height={300}
							data={playerData?.map(data => data)}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey={'full_name'} />
							<YAxis />
							<Tooltip cursor={{ fill: 'transparent' }} />
							<Legend />
							<Bar
								dataKey={selectValue}
								fill="#fca311"
								backgroundColor={'blue'}
								name="Score"
							/>
						</BarChart>
					</ResponsiveContainer>
				</Wrapper>
			)}
		</Container>
	);
};

export default Chart;
