import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap");
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
