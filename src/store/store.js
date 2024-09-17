
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './autSlice/authSlice';

const reducers = combineReducers({
    auth: authSlice,
})

const store = configureStore({reducer: reducers });

export default store;