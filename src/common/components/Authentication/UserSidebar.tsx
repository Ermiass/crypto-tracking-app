/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Avatar, Button } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import { AiFillDelete } from 'react-icons/ai';
import { doc, setDoc } from 'firebase/firestore';
import { useAppDispatch } from '../../../service/utils/hooks';
import { setAlert } from '../../../app/store/alertSlice';
import { CryptoState } from '../../../app/CryptoContext';
import { auth, db } from '../../../features/firebase';
import { numberWithCommas } from '../../../features/pages/Banner/Carousel';

type coin = {
  name: string,
  coin: string,
  id: never,
  current_price: number

}
const useStyles = makeStyles({
  container: {
    width: 350,
    padding: 25,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'monospace',
  },
  profile: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    height: '92%',
  },
  logout: {
    height: '8%',
    width: '100%',
    backgroundColor: '#EEBC1D',
    marginTop: 20,
  },
  picture: {
    width: 200,
    height: 200,
    cursor: 'pointer',
    backgroundColor: '#EEBC1D',
    objectFit: 'contain',
  },
  watchlist: {
    flex: 1,
    width: '100%',
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 15,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    overflowY: 'scroll',
  },
  coin: {
    padding: 10,
    borderRadius: 5,
    color: 'black',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EEBC1D',
    boxShadow: '0 0 3px black',
  },
});

export default function UserSidebar() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
  const { user, coins, symbol, watchlist }= CryptoState();
  const dispatch = useAppDispatch();
  // const {watchlist} = useAppSelector((state) => state.watchlist);
  // console.log(watchlist, coins);

  const toggleDrawer = (anchor:string, open:boolean) => (e: any) => {
    if (
      e.type === 'keydown' &&
      (e.key === 'Tab' || e.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () => {
    signOut(auth);
   dispatch(setAlert({
      open: true,
      type: 'success',
      message: 'Logout Successfull !',
    }));

    toggleDrawer('anchor',true );
  };

  const removeFromWatchlist = async (coin:coin) => {
    const coinRef = doc(db, 'watchlist', user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish:number) => wish !== coin?.id) },
        { merge: true }
      );

      dispatch(setAlert({
        open: true,
        message: `${coin.name} Removed from the Watchlist !`,
        type: 'success',
      }));
    } catch (error) {
      dispatch(setAlert({
        open: true,
        message: error.message,
        type: 'error',
      }));
    }
  };

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div  onClick={toggleDrawer(anchor, true)} >
          <Avatar
           
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: 'pointer',
              backgroundColor: '#EEBC1D',
            }}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />
          </div>
          <Drawer
            anchor='right'
            open={state.right}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  className={classes.picture}
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                />
                <span
                  style={{
                    width: '100%',
                    fontSize: 25,
                    textAlign: 'center',
                    fontWeight: 'bolder',
                    wordWrap: 'break-word',
                  }}
                >
                  {user.displayName || user.email}
                </span>
                <div className={classes.watchlist}>
                  <span style={{ fontSize: 15, textShadow: '0 0 5px black' }}>
                    Watchlist
                  </span>
                  {coins.map((coin:coin) => {
                    if (watchlist.includes(coin.id)) {
                      return (
                        <div className={classes.coin}>
                          <span>{coin.name}</span>
                          <span style={{ display: 'flex', gap: 8 }}>
                            {symbol}{' '}
                            {numberWithCommas(coin.current_price.toFixed(2))}
                            <AiFillDelete
                              style={{ cursor: 'pointer' }}
                              fontSize="16"
                              onClick={() => removeFromWatchlist(coin)}
                            />
                          </span>
                        </div>
                      );
                    }
                    // console.log(user.photoURL);
                    return <></>;
                  })}
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.logout}
                onClick={logOut}
              >
                Log Out
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
