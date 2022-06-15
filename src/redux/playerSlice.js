import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
	name: 'player',
	initialState: {
		player: [],
		playerId: [],
		playerList: '',
		playerSeasonAverage: [],
		playerName: [],
	},
	reducers: {
		setPlayerData: (state, action) => {
			state.player = action.payload;
		},
		setPlayerList: (state, action) => {
			state.playerList = action.payload;
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
	setPlayerList,
	setPlayerData,
	deletePlayerId,
	setSeasonAverages,
	setPlayerName,
} = playerSlice.actions;
export default playerSlice.reducer;
