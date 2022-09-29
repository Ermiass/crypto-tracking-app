import axios from 'axios';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CoinList } from './config/api';

const Crypto = createContext();
const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    type: 'success',
  });
  const getCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === 'USD') setSymbol('$');
    else if (currency === 'EUR') setSymbol('€');
    getCoins();
  }, [currency]);

  // eslint-disable-next-line max-len
  const pro = useMemo(() => ({ currency, setCurrency, symbol, coins, loading, getCoins, alert, setAlert }), [currency, symbol, coins, loading, getCoins, alert, setAlert]);
  return (
    <Crypto.Provider value={pro}>
      {children}
    </Crypto.Provider>
  );
};
export default CryptoContext;
export const CryptoState = () => {
  return useContext(Crypto);
};
