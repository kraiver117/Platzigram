import React, { useContext } from 'react';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import { NavBar } from './components/NavBar';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { Favs } from './pages/Favs';
import { NotFound } from './pages/NotFound';

import { Router, Redirect } from '@reach/router';
import { Context } from './Context';

export const App = () => {
    const { isAuth } = useContext(Context);
    return (
        <>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                <Detail path='/detail/:detailId' />
                {!isAuth && <NotRegisteredUser path='/login' />}
                {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
                {!isAuth && <Redirect from='/user' to='/login' noThrow />}
                {isAuth && <Redirect from='/login' to='/' noThrow />}
                <Favs path='/favs' />
                <User path='/user' />
            </Router>     
            <NavBar />
        </>
    )
}