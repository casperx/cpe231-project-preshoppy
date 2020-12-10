import { useEffect } from 'react';
require('halfmoon/css/halfmoon-variables.min.css');
const halfmoon = require('halfmoon');
import { GlobalStyle } from 'styles/index';
import AppRouter from './AppRouter';

const App = () => {
    useEffect(() => halfmoon.onDOMContentLoaded(), []);

    return (
        <>
            <GlobalStyle />
            <AppRouter />
        </>
    );
};

export default App;
