import React, { ReactNode, MouseEventHandler } from 'react';
import { makeStyles } from '@material-ui/core';

  interface Props {
  children: ReactNode
  onClick: MouseEventHandler
  
}
const useStyles = makeStyles({
  selectbutton: {
    border: '1px solid gold',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Montserrat',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#1363DF',
      color: 'black',
    },
    width: '22%',
  },
});

const Button = ({ children, onClick}:Props) => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default Button;
