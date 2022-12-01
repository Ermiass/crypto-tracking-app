import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import {  Avatar, Box, CardActionArea,LinearProgress } from '@material-ui/core';
import { useGetCryptoNewsQuery } from '../config/CryptoNewsApi';
// import Loader from './Loader';


const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const useStyles = makeStyles({
    root: {
      background:'black',
      alignItems: 'space-around',
      color: 'white',
      border: '2px solid gold',
      width: '30%',
  display: 'grid',
  flexDirection: 'column',
 
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#131111',
  },
  fontFamily: 'Montserrat',
  
      // flexDirection: 'row',
      paddingLeft:5,
      marginLeft: 15,
      marginTop: 15,
    },
    rootsv: {
      flexGrow: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
    },
   
    bullet: {
      // display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    crypto: {
      marginLeft: 35,
      color:'gold'
    },
    vcard: {
      display:'flex',
      flexWrap:'wrap',
      alignItems: 'space-around',
      marginRight:20,
      justifyContent:'space-evenly'
      
      // backgroundColor: '#16171a',
    },
    header: {
      color:'gold',
    }


  });
  
const News = ({ simplified }) => {
     const classes = useStyles();
    
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory:'Cryptocurrency', count: simplified ? 12 : 6});
  console.log(cryptoNews)
  if (!cryptoNews?.value) return <LinearProgress style={{ backgroundColor: 'gold' }} />;

  return (
    <>
    <h1 className={classes.crypto}>Latest Crypto News</h1>
    <Box variant="outlined" className={classes.vcard}>
    
{cryptoNews.value.map((news, i) => (
  
<Card className={classes.root} >
<CardActionArea className={classes.rootsv}   href={news.url} target="_blank" rel="noreferrer" >

<CardContent className={classes.card}  >

  <Typography className={classes.header} variant="h6" component="h2">
  {news.name}
  </Typography>
  <Typography className={classes.pos} color="white">
  <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
  <Typography>{news.description.length > 600 ? `${news.description.substring(0, 600)}...` : news.description}</Typography>
   <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
  <Typography> {news.provider[0]?.name}</Typography>
  </Typography>
  {/* <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
  <Typography> {news.provider[0]?.name}</Typography> */}

  <Typography variant="body2" component="p">
  {moment(news.datePublished).startOf('ss').fromNow()}
  </Typography>
  
</CardContent>
</CardActionArea>
 </Card>
))}
</Box>
 </>
);
}


export default News;
