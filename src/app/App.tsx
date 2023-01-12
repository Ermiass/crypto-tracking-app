import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Navbar from '../common/Navbar';
import Homepage from '../features/pages/Homepage';
import CoinPage from '../features/pages/CoinPage';
import Header from '../common/components/Header';
import NotFound from '../features/pages/NotFound';
import GlobalStyle from '../common/globalStyle';
import Footer from '../common/components/Footer';
import Alert from '../common/components/Alert';

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

    <div className={classes.App}>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Alert />
      <Footer />
    </div>

  );
};

export default App;
