import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/style.css';
import Particles from 'react-particles-js';

const particleOptions = {
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 5,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
            }
        }
}

const Layout = (props) => {
    return (
        <>
        <div className="p-0 col-lg-12">
        <Particles
                className="particles"
                params={particleOptions} />
            <Header />
                {props.children}
            <Footer />
        </div>
        </>
    )
}

export default Layout;