/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {InfoHead, InfoContainer, Stats, DataColor,
  CryptoStyling} from './Nav'
import { GlobalData } from './config/api';

const Navbar = () => {
  const [exchanges, SetExchanges] = useState();

  useEffect(() => {
    axios.get(GlobalData())
    .then(res => {
      SetExchanges(res.data);
    }).catch(error => console.log(error))
  }, []);

  const {data} = exchanges || {};
  const {active_cryptocurrencies, markets, market_cap_change_percentage_24h_usd, market_cap_percentage} = data || {};
  const {btc, eth, usdt} = market_cap_percentage || {}

  return (
    <InfoHead>
      <InfoContainer>
        <Stats>Total Coins: <DataColor>{active_cryptocurrencies}</DataColor></Stats>
        <Stats>Markets: <DataColor>{markets}</DataColor></Stats>
        <Stats>Market Cap 24h Change: <CryptoStyling type={market_cap_percentage === 0.00 ? "#4C7CE0" : (market_cap_change_percentage_24h_usd > 0 ? "#44D400" : "#D40044")}>{parseFloat(market_cap_change_percentage_24h_usd).toFixed(2)}%</CryptoStyling></Stats>
        <Stats>Market Cap Percentage </Stats>
          <Stats>
            BTC: <DataColor>{parseFloat(btc).toFixed(2)} % </DataColor>  
          </Stats>
          <Stats>
            ETH: <DataColor>{parseFloat(eth).toFixed(2)}%</DataColor> 
            </Stats>
          <Stats>
            USDT: <DataColor>{parseFloat(usdt).toFixed(2)}%</DataColor> 
          </Stats>
        
      </InfoContainer>
    </InfoHead>
  )
}
export default Navbar;
