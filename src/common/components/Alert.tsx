import React, { SyntheticEvent } from 'react';
import { Snackbar, SnackbarCloseReason} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useAppDispatch, useAppSelector } from '../../service/utils/hooks';
import { setAlert } from '../../app/store/alertSlice';

const Alert = () => {
  const {alert} = useAppSelector((state) => state.alert);
  const dispatch =  useAppDispatch();
  const handleCloseAlert = (e:SyntheticEvent<unknown,Event>,  reason:SnackbarCloseReason)=> {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setAlert({ open: false }));
  };
  const handleMuiCloseAlert = () => {

    dispatch(setAlert({ open: false }));
  };


  return (
    <Snackbar
      open={(alert.open)}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleMuiCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
