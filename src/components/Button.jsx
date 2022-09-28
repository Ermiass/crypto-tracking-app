import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  selectbutton: {
    border: '1px solid gold',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Montserrat',
    cursor: 'pointer',
    // backgroundColor: selected ? 'gold' : '',
    // color: selected ? 'black' : '',
    // fontWeight: selected ? 700 : 500,
    '&:hover': {
      backgroundColor: 'gold',
      color: 'black',
    },
    width: '22%',
    //   margin: 5,
  },
});

const Button = ({ children, selected, onClick }) => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default Button;
