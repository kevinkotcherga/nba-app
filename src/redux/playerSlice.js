import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
	name: 'player',
	initialState: {
		player: [],
		playerId: [],
		playerSearchResult: '',
		playerSeasonAverage: [],
		playerName: [],
		allPlayerData: [],
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

		setSeasonAverages: (state, action) => {
			state.playerSeasonAverage = action.payload;
		},
		setAllPlayerData: (state, action) => {
			state.allPlayerData = action.payload;
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
	setAllPlayerData,
} = playerSlice.actions;
export default playerSlice.reducer;
