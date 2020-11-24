import React from 'react';
import AppRouter from './AppRouter';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* thai */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Cr_sIfWMuQ5Q.woff2') format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Cr_sIZ2MuQ5Q.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Cr_sIaWMu.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Cy_gIfWMuQ5Q.woff2') format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Cy_gIZ2MuQ5Q.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Cy_gIaWMu.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W__XJnvUD7dzB2KdNodVkI.woff2') format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W__XJnvUD7dzB2KbtodVkI.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W__XJnvUD7dzB2KYNod.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Ck_kIfWMuQ5Q.woff2') format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Ck_kIZ2MuQ5Q.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/prompt/v4/-W_8XJnvUD7dzB2Ck_kIaWMu.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100vh;
    margin: 0;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
