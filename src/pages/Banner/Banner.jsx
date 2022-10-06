import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: 'url(./ban.jpg)'
  },
  bannerContent: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',
  },
  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>

        <Carousel />
        <div className={classes.tagline}>
          <Typography
            variant="subtitle2"
            style={{
              color: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
              // marginBottom: 15,
            }}
          >
            {/* E-Crypto */}
            Get all the Info regarding your favorite Crypto Currency
          </Typography>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
