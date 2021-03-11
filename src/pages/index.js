import * as React from "react"
import Layout from '../components/Layout';
import CarouselGC from '../components/Carousel';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChild } from "react-icons/fa";
import { BiCalendarCheck } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <CarouselGC />
        <section id="home-icons" className="py-5">
            <div className="container">
              <div className="row mr-0 tagline">
                <div className="col-md-4 mb-2 mr-0 text-center">
                <GiPartyPopper size={50} className="ml-auto mr-2" />
                  <h3>All Occasions</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                </div>
                <div className="col-md-4 mb-2 mr-0 text-center">
                <BiCalendarCheck size={50} className="ml-auto mr-2" />
                  <h3>Many Dates Available</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                </div>
                <div className="col-md-4 mb-2 mr-0 text-center">
                <FaChild size={50} className="ml-auto mr-2" />
                  <h3>For All Ages</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                </div>
              </div>
            </div>
        </section>

        <section id="aboutUs" className="p-5 mb-5">
            <div className="dark-overlay">
              <div className="row mr-0">
                <div className="col">
                  <div className="container pt-5 tagline">
                    <h1>About Glamp Camp</h1>
                    <p className="d-none d-md-block mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet consectetur adipiscing elit pellentesque habitant.</p>
                    <button className="btn btn-outline-light d-md-none mb-4 mt-3" data-toggle="modal" data-target="#myModal">Read More</button>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </Layout>
  )
}

export default IndexPage
