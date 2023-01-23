import { createSlice} from '@reduxjs/toolkit';

type userProps = {
  alert : {open: boolean;
     message: string; 
     type: any
  }
};

const initialState = {
 
    alert: ({open: false,
    message: 'string',
    type: 'success',
  }),
  
}as userProps;

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert(state, { payload }) {
      // eslint-disable-next-line no-param-reassign
      state.alert = payload;
    },
    
  },
 
});

export const { setAlert} = alertSlice.actions;

export default alertSlice.reducer;
