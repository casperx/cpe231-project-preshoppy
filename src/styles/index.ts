import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Prompt, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100vh;
    margin: 0;
  }
`;
