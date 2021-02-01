import React from 'react';
import { Layout } from '../components/Layout';

import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

export const Home = ({ categoryId }) => {
    return(
        <Layout title='Pet Photos App' subtitle='With Petgram you can find a lot of wonderful pet photos'>
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={categoryId} />
        </Layout>
    )
}