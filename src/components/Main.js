import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <section className="main-start-section hero is-fullheight is-fullheight-with-navbar" id="main">
                <div className="main-text-container">
                    <div className="main-text-section">
                        <div className="main-name">
                            <h1 className="main-header">Michael</h1>
                            <h1 className="main-header-last">Chen</h1>
                        </div>
                        <p className="main-paragraph">Hi! I'm Michael Chen and I'm a recent software engineer graduate from General Assembly and looking to make a greater change in this world.</p>
                        <a className="button continue-more" href="#about">Continue for More!</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Main;