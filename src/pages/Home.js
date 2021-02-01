import React from 'react';
import { Layout } from '../components/Layout';

import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

const HomePage = ({ categoryId }) => {
    return(
        <Layout title='Pet Photos App' subtitle='With Petgram you can find a lot of wonderful pet photos'>
            <ListOfCategories/>
            <ListOfPhotoCards categoryId={categoryId} />
        </Layout>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId
})