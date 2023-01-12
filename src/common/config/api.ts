export const TrendingCoins = (currency:string | undefined) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
export const CoinList = (currency: string | undefined) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id: string | undefined) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

// eslint-disable-next-line default-param-last
export const HistoricalChart = (id: string | undefined, days = 365, currency: string | undefined) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
  export const GlobalData = () => `https://api.coingecko.com/api/v3/global`
