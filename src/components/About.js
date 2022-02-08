import React, { Component } from 'react';
// [] add about me paragraph
// [] add side picture
// [] styling

class About extends Component {
    render() {
        return (
            <section className="about-start-section is-fullheight hero" id="about">
                <div class="about-image">
                    <img className="about-photo" src="About-photo.png" alt='About me photo' />
                </div>
                <div className="about-text-container">
                    <h1 className="about-header">About</h1>
                    <h2 className="about-title">Who Am I?</h2>
                    <div className="about-introline">My name is Michael Chen and I’m a young, inspired software engineer who graduated from General Assembly.</div>
                    <div className="about-paragraph">
                        <div>I am a graduate of the University of California, Irvine with a B.S. in Biology. In my first year at UCI, I worked at PRN Ambulance as an EMT as well as enlisted into the Marine Corps as a Reservist.</div>
                        <br />
                        <div>I am a consistent music listener and love nature. I hope to slowly make an impact in everyone's lives. I love spending time with people and playing guitar whenever I can!</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;