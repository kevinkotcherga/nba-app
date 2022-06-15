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
import SelectElement from './SelectElement';

const Chart = () => {
	const seasonAverages = useSelector(state => state.player.playerSeasonAverage);
	const playerId = useSelector(state => state.player.playerId);
	const selectValue = useSelector(state => state.select.select);

	return (
		<div>
			{playerId?.length > 0 && (
				<>
					<SelectElement />
					<ResponsiveContainer aspect={3}>
						<BarChart
							width={500}
							height={300}
							data={seasonAverages?.map(data => data?.data[0])}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey={selectValue} fill="#fca311" />
						</BarChart>
					</ResponsiveContainer>
				</>
			)}
		</div>
	);
};

export default Chart;
