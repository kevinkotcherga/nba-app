import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
	setAllPlayerData,
	setPlayerName,
	setSeasonAverages,
} from '../redux/playerSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#212121',
		border: '2px solid #888888',
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: '#ffffff',
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const PlayerTable = () => {
	const playerId = useSelector(state => state.player.playerId);
	const playerName = useSelector(state => state.player.playerName);
	const seasonAverages = useSelector(state => state.player.playerSeasonAverage);
	const dispatch = useDispatch();

	async function fetchJson(url) {
		const res = await fetch(url);
		return res.json();
	}

	const lookupURLs = {
		playerAverages:
			'https://www.balldontlie.io/api/v1/season_averages?player_ids[]=',
		playerName: 'https://www.balldontlie.io/api/v1/players/',
	};

	useEffect(() => {
		function createPlayerData(mappingFn) {
			return Promise.all(playerId.map(mappingFn));
		}

		(async () => {
			const seasonAveragesData = await createPlayerData(playerId =>
				fetchJson(lookupURLs.playerAverages + playerId.dataId),
			);
			dispatch(setSeasonAverages(seasonAveragesData));
		})();

		(async () => {
			const playerNameData = await createPlayerData(playerId =>
				fetchJson(lookupURLs.playerName + playerId.dataId),
			);
			dispatch(setPlayerName(playerNameData));
		})();
	}, [playerId, dispatch, lookupURLs.playerAverages, lookupURLs.playerName]);

	const mapSeasonAverages = seasonAverages.map(data => data?.data[0]);

	const playerData = playerName.map(player => {
		const matchingScore = mapSeasonAverages.find(
			score => score?.player_id === player?.id,
		);
		return {
			id: player.id,
			first_name: player.first_name,
			last_name: player.last_name,
			games_played: matchingScore?.games_played ?? 0,
			min: matchingScore?.min ?? 0,
			fgm: matchingScore?.fgm ?? 0,
			fga: matchingScore?.fga ?? 0,
			fg3m: matchingScore?.fg3m ?? 0,
			fg3a: matchingScore?.fg3a ?? 0,
			ftm: matchingScore?.ftm ?? 0,
			fta: matchingScore?.fta ?? 0,
			oreb: matchingScore?.oreb ?? 0,
			dreb: matchingScore?.dreb ?? 0,
			reb: matchingScore?.reb ?? 0,
			ast: matchingScore?.ast ?? 0,
			stl: matchingScore?.stl ?? 0,
			blk: matchingScore?.blk ?? 0,
			turnover: matchingScore?.turnover ?? 0,
			pf: matchingScore?.pf ?? 0,
			pts: matchingScore?.pts ?? 0,
			fg_pct: matchingScore?.fg_pct ?? 0,
			fg3_pct: matchingScore?.fg3_pct ?? 0,
			ft_pct: matchingScore?.ft_pct ?? 0,
		};
	});

	dispatch(setAllPlayerData(playerData));

	if (seasonAverages.length > 0) {
		return (
			<TableContainer
				component={Paper}
				style={{ width: '90vw', margin: 'auto' }}
			>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Nom du joueur</StyledTableCell>
							<StyledTableCell align="right">parties jouées</StyledTableCell>
							<StyledTableCell align="right">min</StyledTableCell>
							<StyledTableCell align="right">fgm</StyledTableCell>
							<StyledTableCell align="right">fga</StyledTableCell>
							<StyledTableCell align="right">fg3m</StyledTableCell>
							<StyledTableCell align="right">fg3a</StyledTableCell>
							<StyledTableCell align="right">ftm</StyledTableCell>
							<StyledTableCell align="right">fta</StyledTableCell>
							<StyledTableCell align="right">oreb</StyledTableCell>
							<StyledTableCell align="right">dreb</StyledTableCell>
							<StyledTableCell align="right">reb</StyledTableCell>
							<StyledTableCell align="right">ast</StyledTableCell>
							<StyledTableCell align="right">stl</StyledTableCell>
							<StyledTableCell align="right">blk</StyledTableCell>
							<StyledTableCell align="right">turnover</StyledTableCell>
							<StyledTableCell align="right">pf</StyledTableCell>
							<StyledTableCell align="right">pts</StyledTableCell>
							<StyledTableCell align="right">fg_pct</StyledTableCell>
							<StyledTableCell align="right">fg3_pct</StyledTableCell>
							<StyledTableCell align="right">ft_pct</StyledTableCell>
						</TableRow>
					</TableHead>
					{playerData?.map((player, index) => (
						<TableBody key={index}>
							<StyledTableRow>
								<StyledTableCell component="th" scope="row">
									{player?.first_name + ' ' + player?.last_name}
								</StyledTableCell>

								<StyledTableCell align="right">
									{player?.games_played}
								</StyledTableCell>
								<StyledTableCell align="right">{player?.min}</StyledTableCell>
								<StyledTableCell align="right">{player?.fgm}</StyledTableCell>
								<StyledTableCell align="right">{player?.fga}</StyledTableCell>
								<StyledTableCell align="right">{player?.fg3m}</StyledTableCell>
								<StyledTableCell align="right">{player?.fg3a}</StyledTableCell>
								<StyledTableCell align="right">{player?.ftm}</StyledTableCell>
								<StyledTableCell align="right">{player?.fta}</StyledTableCell>
								<StyledTableCell align="right">{player?.oreb}</StyledTableCell>
								<StyledTableCell align="right">{player?.dreb}</StyledTableCell>
								<StyledTableCell align="right">{player?.reb}</StyledTableCell>
								<StyledTableCell align="right">{player?.ast}</StyledTableCell>
								<StyledTableCell align="right">{player?.stl}</StyledTableCell>
								<StyledTableCell align="right">{player?.blk}</StyledTableCell>
								<StyledTableCell align="right">
									{player?.turnover}
								</StyledTableCell>
								<StyledTableCell align="right">{player?.pf}</StyledTableCell>
								<StyledTableCell align="right">{player?.pts}</StyledTableCell>
								<StyledTableCell align="right">
									{player?.fg_pct}
								</StyledTableCell>
								<StyledTableCell align="right">
									{player?.fg3_pct}
								</StyledTableCell>
								<StyledTableCell align="right">
									{player?.ft_pct}
								</StyledTableCell>
							</StyledTableRow>
						</TableBody>
					))}
				</Table>
			</TableContainer>
		);
	}
};

export default PlayerTable;
