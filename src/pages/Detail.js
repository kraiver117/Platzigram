import React from 'react';
import { Layout } from '../components/Layout';

import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';

export const Detail = ({ detailId }) => (
    <Layout title={`Photo ${detailId}`}>
        <PhotoCardWithQuery id={detailId} />
    </Layout>
)