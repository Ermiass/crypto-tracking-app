import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const Crypto = createContext();
const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    if (currency === 'USD') setSymbol('$');
    else if (currency === 'EUR') setSymbol('€');
  }, [currency]);
  const pro = useMemo(() => ({ currency, setCurrency, symbol }), [currency, symbol]);
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
