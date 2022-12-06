import { createSlice} from '@reduxjs/toolkit';
import { ReactNode } from 'react';

type symbolProps = {
 symbol: ReactNode,
};

const initialState = {
  symbol: ('$'),
  }as symbolProps; 
  

export const watchlistSlice = createSlice({
  name: 'symbol',
  initialState,
  reducers: {
    setSymbol(state, { payload }) {
      // eslint-disable-next-line no-param-reassign
      state.symbol = payload;
    },
    
  },
 
});

export const { setSymbol} = watchlistSlice.actions;

export default watchlistSlice.reducer;
