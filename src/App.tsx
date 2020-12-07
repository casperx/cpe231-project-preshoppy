import React from 'react';
import { GlobalStyle } from 'styles/index';
import AppRouter from './AppRouter';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <AppRouter />
        </>
    );
};

export default App;
