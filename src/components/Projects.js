import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section className="projects-start-section is-fullheight hero" id="projects">
                <div className="projects-header">Projects</div>
                <div className="projects-container">
                    <div className="columns features">
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <a href="#projects">
                                        <figure className="image is-4by3">
                                            <img src="spaceship_racer.png" alt="Spaceship Racer Image" className="modal-button" data-target="modal-image2" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Spaceship Racer</h4>
                                        <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                                        <span className="button is-link modal-button" data-target="modal-image2">Image modal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <a href="#projects">
                                        <figure className="image is-4by3">
                                            <img src="viral.png" alt="Viral Project Image" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Tempor orci dapibus faber in.</h4>
                                        <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                                            sed risus.</p>
                                        <span className="button is-link modal-button" data-target="modal-card">Modal Card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 modal-button" data-target="modal-image">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <a href="#projects">
                                        <figure className="image is-4by3">
                                            <img src="organize.png" alt="Organize Project Image" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Click anywhere on card</h4>
                                        <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <span className="button is-link modal-button" data-target="modal-image">Image modal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;