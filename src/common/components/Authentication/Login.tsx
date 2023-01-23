import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../../service/utils/hooks';
import { setAlert } from '../../../app/store/alertSlice';
// import { CryptoState } from '../../../app/CryptoContext';
import { auth } from '../../../features/firebase';

type props = {
  handleClose:()=> void  
}

const Login = ({ handleClose }: props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { setAlert } = CryptoState();
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    if (!email || !password) {
      dispatch(setAlert({
        open: true,
        message: 'Please fill all the Fields',
        type: 'error',
      }));
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setAlert({
        open: true,
        message: `Log In Successful. Welcome ${result.user.email}`,
        type: 'success',
      }));

      handleClose();
    } catch (error) {
      dispatch(setAlert({
        open: true,
        message: error.message,
        type: 'error',
      }));
    }
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <TextField
        inputProps={{'data-testid': 'Enter-Email'}}
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
       inputProps={{'data-testid': 'Enter-Password'}}
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button
      data-testid='login' 
        variant="contained"
        type='submit'
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: '#EEBC1D',
          marginBottom: 20 }}
          disabled={!email || !password }
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
