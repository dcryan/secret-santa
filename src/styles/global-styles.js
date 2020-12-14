import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/background.png';


export const GlobalStyles = createGlobalStyle`
  html {
    background-image: url(${backgroundImage});
    background-size: repeat;
  }
`;
