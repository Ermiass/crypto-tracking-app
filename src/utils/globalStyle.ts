import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} 

  * {
    margin:0;
    box-sizing: border-box;
    padding:0;
    scroll-behavior: smooth;
  }
   a {
    text-decoration: none;
    color:gold;
   }
  
`;

export default GlobalStyle;
