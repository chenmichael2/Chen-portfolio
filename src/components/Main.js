import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <section className="main-start-section hero is-fullheight is-fullheight-with-navbar">
                {/* <div className="introduction-me"> */}

                <img className="main-photo" src='IMG_6405.jpg' alt="Michael Chen" />
                <div className="main-text-container">
                    <div className="main-text-section">
                        <h1 className="main-header">Michael Chen</h1>
                        <p className="main-paragraph">Hi! I'm Michael Chen and I'm a recent software engineer graduate from General Assembly</p>
                    </div>
                </div>

                {/* </div> */}
            </section>
        )
    }
}
// main-start-section full-height
export default Main;