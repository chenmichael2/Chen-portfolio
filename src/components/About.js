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
                    <div className="about-paragraph">Hello more words to say</div>
                </div>
            </section>
        )
    }
}

export default About;