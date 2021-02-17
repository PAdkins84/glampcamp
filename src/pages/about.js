import React from 'react';
import Layout from '../components/Layout';
import gt from '../images/gt.jpg';

const About = () => {
    return (
        <Layout>
            <div className="container mt-5 aboutPage">
                <h1 className="aboutH">About us</h1>
                <img src={gt} alt="Luxury tent" className="aboutImg" />
                <div className="imgBg"></div>
                <p className="aboutP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem ab expedita vero aut quibusdam distinctio minima obcaecati labore maiores explicabo, sequi voluptatem dignissimos placeat magnam repudiandae, doloribus soluta numquam.
                Repudiandae porro, obcaecati consequuntur quod quo nisi tempora corporis omnis impedit amet ratione sapiente illo voluptas consequatur voluptates eos eum odit est voluptate neque ab quaerat fuga accusantium? Ducimus, atque?
                Quae illo vel iure quo suscipit sapiente numquam exercitationem quasi ex dolor? Voluptatum, nesciunt? Facere, facilis! Eaque libero molestias dolorum a. Quasi tempore quibusdam eos nemo debitis id veritatis dicta!
                Architecto illum, natus fugiat ipsum corrupti unde minus, odio officia doloremque ea dicta placeat sit quos ut explicabo asperiores quasi saepe dolorem repudiandae dolor neque? Atque repudiandae dicta laborum blanditiis.
                Soluta ducimus modi id ipsum nobis nemo, officiis maxime incidunt praesentium a distinctio. Deserunt quasi suscipit reprehenderit delectus quisquam dolorum, corporis voluptates dolores nobis ipsam non eveniet esse quidem corrupti?</p>
            </div>
        </Layout>
    )
}

export default About;