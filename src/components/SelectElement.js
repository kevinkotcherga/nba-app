import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectValue } from '../redux/selectSlice';

const SelectElement = () => {
	const dispatch = useDispatch();
	const seasonAverages = useSelector(state => state.player.playerSeasonAverage);
	const handleChange = event => {
		dispatch(setSelectValue(event.target.value));
	};

	return (
		<Box
			sx={{
				backgroundColor: '#ffffff',
				width: '400px',
				margin: '30px auto',
			}}
		>
			<FormControl fullWidth>
				<InputLabel
					id="demo-simple-select-label"
					style={{ color: '#000', fontSize: '30px', marginTop: '20px' }}
				>
					Statistiques
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={seasonAverages}
					label="Statistiques"
					onChange={handleChange}
					style={{ color: 'blue' }}
				>
					<MenuItem value={'games_played'}>Parties jouées</MenuItem>
					{/* <MenuItem value={'min'}>Min</MenuItem> */}
					<MenuItem value={'fgm'}>Fgm</MenuItem>
					<MenuItem value={'fga'}>Fga</MenuItem>
					<MenuItem value={'fg3m'}>Fg3m</MenuItem>
					<MenuItem value={'fg3a'}>Fg3a</MenuItem>
					<MenuItem value={'ftm'}>Ftm</MenuItem>
					<MenuItem value={'fta'}>Fta</MenuItem>
					<MenuItem value={'oreb'}>Oreb</MenuItem>
					<MenuItem value={'dreb'}>Dreb</MenuItem>
					<MenuItem value={'reb'}>Reb</MenuItem>
					<MenuItem value={'ast'}>Ast</MenuItem>
					<MenuItem value={'stl'}>Stl</MenuItem>
					<MenuItem value={'blk'}>Blk</MenuItem>
					<MenuItem value={'turnover'}>Turnover</MenuItem>
					<MenuItem value={'pf'}>Pf</MenuItem>
					<MenuItem value={'pts'}>Pts</MenuItem>
					<MenuItem value={'fg_pct'}>Fg_pct</MenuItem>
					<MenuItem value={'fg3_pct'}>Fg3_pct</MenuItem>
					<MenuItem value={'ft_pct'}>Ft_pct</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectElement;
