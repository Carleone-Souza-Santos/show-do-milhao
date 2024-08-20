import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/background.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
