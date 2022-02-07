import React, { Component } from 'react';
// [] add about me paragraph
// [] add side picture
// [] styling

class About extends Component {
    render() {
        return (
            <section className="about-start-section is-fullheight hero" id="about">
                <div className="about-text-container">
                    <h1 className="about-header">About</h1>
                    <h2 className="about-title">Who Am I?</h2>
                    <div className="about-paragraph">This is the paragraph where I talk more about myself</div>
                </div>
                <img className="about-photo" src="About-photo.png" alt='About me photo' />

            </section>
        )
    }
}

export default About;