/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit';
import { cryptoNewsApi } from '../../common/config/CryptoNewsApi';
import searchReducer from './currencySlice';
import alertReducer from './alertSlice';

const store = configureStore({
  reducer: {
    loading: searchReducer,
    alert: alertReducer,
    // watchlist: watchlisReducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoNewsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
