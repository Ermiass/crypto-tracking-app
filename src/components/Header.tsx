import React from 'react';
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  createTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSidebar';
import News from './News';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  },
});

const Header = () => {
  const classes = useStyles();
  const { currency, setCurrency, user }: any= CryptoState();
  const navigate = useNavigate();
  console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate('/')}
              variant="h6"
              className={classes.title}
            >
              E-Crypto
            </Typography>
            <Typography
              className={classes.title}
            >
              <News />
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
              id="demo-simple-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
            </Select>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
