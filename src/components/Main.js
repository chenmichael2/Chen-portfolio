import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <section className="main-start-section hero is-fullheight is-fullheight-with-navbar">
                <img className="main-photo" src='IMG_6405.jpg' alt="Michael Chen" />
                <div className="main-text-container">
                    <div className="main-text-section">
                        <div className="main-name">
                            <h1 className="main-header">Michael</h1>
                            <h1 className="main-header-last">Chen</h1>
                        </div>
                        <p className="main-paragraph">Hi! I'm Michael Chen and I'm a recent software engineer graduate from General Assembly.</p>
                        <button className="button continue-more">Continue for More!</button>
                    </div>
                </div>
            </section>
        )
    }
}
// main-start-section full-height
export default Main;