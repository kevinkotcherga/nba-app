import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setSelectValue } from '../redux/selectSlice';
import '../styles/selectElement.scss';

const styles = {
	select: {
		'.MuiOutlinedInput-notchedOutline': {
			borderColor: '#fca311',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#fca311',
			borderWidth: '0.15rem',
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#fca311',
		},
	},
};

const SelectElement = () => {
	const dispatch = useDispatch();
	const [stats, setStats] = useState('games_played');
	const handleChange = event => {
		setStats(event.target.value);
		dispatch(setSelectValue(event.target.value));
	};

	return (
		<div className="select">
			<Box
				sx={{
					backgroundColor: '#ffffff',
					width: '400px',
					margin: '50px 80px',
				}}
			>
				<FormControl fullWidth style={{ backgroundColor: '#000' }}>
					<InputLabel id="demo-simple-select-label" style={{ color: '#fff' }}>
						Statistiques
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={stats}
						label="Statistiques"
						onChange={handleChange}
						sx={styles.select}
						style={{ color: 'white', backgroundColor: '#000' }}
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
		</div>
	);
};

export default SelectElement;
