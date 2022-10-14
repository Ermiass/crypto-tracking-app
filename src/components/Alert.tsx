import React, { SyntheticEvent } from 'react';
import { Snackbar, SnackbarCloseReason} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { CryptoState } from '../CryptoContext';


const Alert = () => {
  const { alert, setAlert } = CryptoState();

  const handleCloseAlert = (e:SyntheticEvent<unknown,Event>,  reason:SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({ open: false });
  };
  const handleMuiCloseAlert = () => {

   setAlert({ open: false });
  };


  return (
    <Snackbar
      open={alert.open}
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
