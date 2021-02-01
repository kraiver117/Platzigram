import React from 'react';
import { Layout } from '../components/Layout';

import { FavsWithQuery } from '../container/GetFavorites';

export const Favs = () => {
    return (
        <Layout title='Your Favorites' subtitle='Here you can find your favorites photos'>
            <FavsWithQuery />
        </Layout>
    )
}
