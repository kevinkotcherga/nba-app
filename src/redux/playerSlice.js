import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
	name: 'player',
	initialState: {
		player: [],
		playerId: [],
		playerSearchResult: '',
		playerSeasonAverage: [],
		playerName: [],
	},
	reducers: {
		setPlayerData: (state, action) => {
			state.player = action.payload;
		},
		setPlayerSearchResult: (state, action) => {
			state.playerSearchResult = action.payload;
		},
		setPlayerId: (state, action) => {
			state.playerId.push(action.payload);
		},
		// deletePlayerId: (state, action) => {
		// 	state.playerId = state.playerId.filter(
		// 		arrow => arrow.id !== action.payload,
		// 	);
		// },
		setSeasonAverages: (state, action) => {
			state.playerSeasonAverage = action.payload;
		},
		setPlayerName: (state, action) => {
			state.playerName = action.payload;
		},
	},
});

export const {
	setPlayerId,
	setPlayerSearchResult,
	setPlayerData,
	deletePlayerId,
	setSeasonAverages,
	setPlayerName,
} = playerSlice.actions;
export default playerSlice.reducer;
