import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            // <section className="contact-start-section is-fullheight hero" id="contact">
            //     <h1 className="contact-header">Hello Contact Section</h1>
            // </section>
            <div className="contact-section" id="contact">
                <div>
                    <a><i className="bi-github contact-icon"></i></a>
                    <a><i className="bi-linkedin contact-icon"></i></a>
                </div>
                <div className="contact-me">
                    <h1 className="contact-me-text">Contact Me!</h1>
                </div>
            </div>
        )
    }
}

export default Contact;