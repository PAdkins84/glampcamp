import * as React from "react"
import Layout from '../components/Layout';
import CarouselGC from '../components/Carousel';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <CarouselGC />
    </Layout>
  )
}

export default IndexPage
