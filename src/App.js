import React from 'react';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import { NavBar } from './components/NavBar';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

import { Router } from '@reach/router';

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
            <NavBar />
        </>
    )
}