import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { CryptoState } from '../../CryptoContext';
import { auth } from '../../firebase';

type props = {
  handleClose:()=> void  
}

const Signup = ({ handleClose }:props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { setAlert }= CryptoState();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: 'Passwords do not match',
        type: 'error',
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(result);
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`,
        type: 'success',
      });

      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: 'error',
      });
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
      inputProps={{'data-testid': 'email'}}
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
       inputProps={{'data-testid': 'password'}}
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
      // inputProps={{'data-testid': 'Confirm-Password'}}
      // data-testid = 'Confirm-Password'
        variant="outlined"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        type='submit'
        size="large"
        style={{ backgroundColor: '#EEBC1D',
          marginBottom: 20 }}
        onClick={handleSubmit}
        disabled={!email || !password || !confirmPassword }
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
