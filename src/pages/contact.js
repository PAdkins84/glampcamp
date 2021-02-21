import React from 'react';
import Layout from '../components/Layout';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/pro-solid-svg-icons'

const Contact = () => {
    function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('service_i2cnns8', 'template_ret5k2c', e.target, 'user_XuohWCmylbyZzZ5MphvVw')
            .then((result) => {
                console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
        alert('Thanks for your enquiry')
    }

    // function validateEmail(email) {
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);
    // }

    return (
        <Layout>
            <section className="mt-5 mb-5 pr-3 pl-3 container contactStyle">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
            <div className="row">

            <div className="col-md-9 mb-md-0 mb-5">
            <form onSubmit={sendEmail} name="contact">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="name" placeholder="Your Name" name="name" className="form-control"/>
                                <label htmlFor="name" className="">Your name</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="email" id="email" placeholder="Your Email" name="email" className="form-control"/>
                                <label htmlFor="email" className="">Your email</label>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <input type="text" id="subject" placeholder="Subject" name="subject" className="form-control"/>
                                <label htmlFor="subject" className="">Subject</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-12">

                            <div className="md-form">
                                <textarea type="text" id="message" placeholder="Your message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                <label htmlFor="message">Your message</label>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                    </div>
                    <div className="text-center text-md-left mb-5">
                        <button className="btn btn-outline-dark" type="submit">Send</button>
                    </div>
                </form>
            </div>
            <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                    <li><FontAwesomeIcon icon={faMapMarkerAlt} size="3x"/>
                        <p>Birmingham, UK</p>
                    </li>

                    <li><FontAwesomeIcon icon={faPhone} size="3x"/>
                        <p>07926619158</p>
                    </li>

                    <li><FontAwesomeIcon icon={faEnvelope} size="3x"/>
                        <p>contact@glamp-camp.co.uk</p>
                    </li>
                </ul>
            </div>
        </div>

        </section>
        </Layout>
    )
}

export default Contact