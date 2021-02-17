import React from 'react';
import Layout from '../components/Layout';
import MyGallery from '../components/MyGallery';

const Pricing = () => {
    return (
        <Layout>
            <div className="container galleryStyle mb-5">
            <h1 className="mt-5 text-center">Gallery</h1>
            <MyGallery />
            </div>
        </Layout>  
    )
}

export default Pricing;