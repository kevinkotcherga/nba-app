import { createSlice } from '@reduxjs/toolkit';

export const selectSlice = createSlice({
	name: 'select',
	initialState: {
		select: 'games_played',
	},
	reducers: {
		setSelectValue: (state, action) => {
			state.select = action.payload;
		},
	},
});

export const { setSelectValue } = selectSlice.actions;
export default selectSlice.reducer;
