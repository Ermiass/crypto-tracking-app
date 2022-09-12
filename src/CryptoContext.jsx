import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const Crypto = createContext();
const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    if (currency === 'USD') setSymbol('$');
    else if (currency === 'EURO') setSymbol('Є');
  }, [currency]);
  const pro = useMemo(() => ({ currency, setCurrency, symbol }), [currency]);
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
