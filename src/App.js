import React from 'react';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';

import { Home } from './pages/Home';
import { Router } from '@reach/router';
import { Detail } from './pages/Detail';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                <Detail path='/detail/:detailId' />
            </Router>
        </>
    )
}