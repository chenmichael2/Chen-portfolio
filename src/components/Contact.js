import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            // <section className="contact-start-section is-fullheight hero" id="contact">
            //     <h1 className="contact-header">Hello Contact Section</h1>
            // </section>
            <div className="contact-section" id="contact">
                <div>
                    <a href=""><i className="bi-github contact-icon"></i></a>
                    <a href=""><i className="bi-linkedin contact-icon"></i></a>
                </div>
                    <div className="contact-me-text">Contact Me!</div>
                <div className="contact-me">
                    <div className="contact-container">
                        <div className='email'>Email: chenmichael2012@gmail.com</div>
                        <div className='phone'>Phone: 310-961-7740</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;