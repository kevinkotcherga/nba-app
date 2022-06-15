import { createSlice } from '@reduxjs/toolkit';

export const localStorageSlice = createSlice({
	name: 'localStorage',
	initialState: {
		localStorage: [],
	},
	reducers: {
		setLocalStorageIds: (state, action) => {
			state.select = action.payload;
		},
	},
});

export const { setSelectValue } = localStorageSlice.actions;
export default localStorageSlice.reducer;
