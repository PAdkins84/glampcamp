import React from 'react';
import Layout from '../components/Layout';
import gt from '../images/glampcampgallery/gc6.jpg';

const About = () => {
    return (
        <Layout>
            <div className="container mt-5 aboutPage">
                <h1 className="aboutH">About us</h1>
                <img src={gt} alt="Luxury tent" className="aboutImg" />
                <div className="imgBg"></div>
                <p className="aboutP">We are a small family run midlands based business! Based in the heart of Birmingham so can easily access most areas inner and outer City and surrounding areas!
                <br/>
                <br/>
                Creating magical memories is our business ethos, we want every customer have a personable approach to ensure a high quality event is delivered!
                <br/>
                <br/>
                Please contact us with any enquiries as we'd be more than happy to help
                </p>
            </div>
        </Layout>
    )
}

export default About;