import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            // <section className="contact-start-section is-fullheight hero" id="contact">
            //     <h1 className="contact-header">Hello Contact Section</h1>
            // </section>
            <div className="contact-section" id="contact">
                <div>
                    <a href="https://github.com/chenmichael2"><i className="bi-github contact-icon"></i></a>
                    <a href="https://www.linkedin.com/in/chenmichael2/"><i className="bi-linkedin contact-icon"></i></a>
                </div>
                    <a href="mailto:chenmichael2012@gmail.com" className="contact-me-text">Click Here to Contact Me!</a>
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