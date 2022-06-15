import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';
import selectReducer from './selectSlice';
import localStorageReducer from './localStorageSlice';

export default configureStore({
	reducer: {
		player: playerReducer,
		select: selectReducer,
		localStorage: localStorageReducer,
	},
});
