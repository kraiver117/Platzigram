import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { Logo }  from './components/Logo';

import { GlobalStyle } from './styles/GlobalStyles';

export const App = () => {
    return (
        <>
            <Logo />
            <GlobalStyle />
            <ListOfCategories />
            <ListOfPhotoCards categoryId = {1}/>
        </>
    )
}