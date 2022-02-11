import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return(
            <section className="resume-start-section is-fullheight hero" id="resume">
                <div className="top-resume-section">
                    <h1>Michael Chen</h1>
                    <h2>Software Engineer | Full-Stack Developer | Marine Reservist</h2>
                </div>
                <div className="left-resume-section">left</div>
                <div className="right-resume-section">right</div>
                <a className="resume-download" href="Michael Chen Resume.pdf" target="_blank">Hello</a>
            </section>
        )
    }
}

export default Resume;