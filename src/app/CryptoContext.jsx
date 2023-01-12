import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAppDispatch} from '../service/utils/hooks';
import { CoinList } from '../common/config/api';
import { auth, db } from '../features/firebase';
import { setLoading } from './store/currencySlice';

const Crypto = createContext()
const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [user, setUser] = useState()
  const dispatch = useAppDispatch();
  const getCoins = async () => {
    dispatch(setLoading(true));
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    dispatch(setLoading(false));
  };
  
  useEffect(() => {
    if (user) {
      const coinRef = doc(db, 'watchlist', user?.uid);
      const unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          // console.log(coin.data().coins);
          setWatchlist(coin.data().coins);
        } else {
          console.log('No Items in Watchlist');
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  useEffect(() => {
    if (currency === 'USD') setSymbol('$');
    else if (currency === 'EUR') setSymbol('€');
    getCoins();
  }, [currency]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);

    });
  }, []);
  // console.log(user);

  const pro = useMemo(() => ({ currency, setCurrency, symbol, coins,  getCoins, user, watchlist,  setUser }), [currency, setUser, user, symbol, coins, getCoins, setCurrency]);
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
