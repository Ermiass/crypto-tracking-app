import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import GlobalStyle from './utils/globalStyle';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
}));
const App = () => {
  const classes = useStyles();
  return (

    <BrowserRouter>
      <div className={classes.App}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
};

export default App;
