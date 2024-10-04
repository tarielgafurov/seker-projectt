
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './autSlice/authSlice';

const reducers = combineReducers({
    auth: authSlice,
    userInnerId: userPageSlice.reducer
})

const store = configureStore({reducer: reducers });

export default store;