import React, { useEffect, useState } from 'react';
import { Container, makeStyles, createTheme, TextField, Paper, Table, TableBody, TableHead, TableRow, TableCell, TableContainer, LinearProgress, ThemeProvider, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { CryptoState } from '../../app/CryptoContext';
import { numberWithCommas } from '../../features/pages/Banner/Carousel';
import HomeNews from './HomeNews';

type props = {
  coin: string
  name: string
  symbol: string,
}
type row = {
  row:string
  price_change_percentage_24h: number,
  name: string,
  id: string,
  symbol: string,
  image: string,
  current_price: number,
  market_cap:  number,
}

const useStyles = makeStyles({
  row: {
    backgroundColor: '#16171a',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#131111',
    },
    fontFamily: 'Montserrat',
  },
  pagination: {
    '& .MuiPaginationItem-root': {
      color: 'gold',
    },
  },
});

const CoinsTable = () => {
  const { currency, symbol, coins, loading, getCoins } = CryptoState();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const classes = useStyles();
  useEffect(() => {
    getCoins();
  }, [currency]);
 
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });
  
  const handleSearch = () => {
    return coins.filter(
      (coin:props) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          style={{ margin: 18,
            fontFamily: 'Montserrat' }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
         data-testid='search' 
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: '100%' }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: 'gold' }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: '#EEBC1D' }}>
                <TableRow>
                  {['Coin', 'Price', '24h Change', 'Market Cap'].map((head) => (
                    <TableCell
                      style={{
                        color: 'black',
                        fontWeight: '700',
                        fontFamily: 'Montserrat',
                      }}
                      key={head}
                      align={head === 'Coin' ? 'inherit' : 'right'}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row:row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => navigate(`/coins/${row.id}`)}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: 'flex',
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                          >
                            <span
                              style={{
                                textTransform: 'uppercase',
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: 'darkgrey' }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{' '}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit ? 'rgb(14, 203, 129)' : 'red',
                            fontWeight: 500,
                          }}
                        >
                          {profit && '+'}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{' '}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <Pagination
          count={parseFloat((handleSearch().length / 10).toFixed(0))}
          style={{
            padding: 20,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
      <HomeNews simplified={undefined} />
    </ThemeProvider>
  );
};

export default CoinsTable;
