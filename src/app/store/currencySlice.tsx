import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const searchSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, { payload }) {
      // eslint-disable-next-line no-param-reassign
      state.loading = payload;
    },
  },
});

export const { setLoading } = searchSlice.actions;

export default searchSlice.reducer;
