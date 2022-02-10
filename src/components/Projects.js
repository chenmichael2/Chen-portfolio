import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section className="projects-start-section is-fullheight hero" id="projects">
                <div className="projects-header">Projects</div>
                <div className="projects-container">
                    {/* <div className="columns features"> */}
                    <div className="column is-4">
                        <div className="card is-shady">
                            <div className="card-image">
                                <a href="https://chenmichael2.github.io/Spaceship-Racer/">
                                    <figure className="image is-4by3">
                                        <img src="spaceship_racer.png" alt="Spaceship Racer Image" className="modal-button" data-target="modal-image2" />
                                    </figure>
                                </a>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <h4>Spaceship Racer</h4>
                                    <p className="card-paragraph">A two player game where each player controls a spaceship. First one to reach the other side five times wins with multiple difficulties that can be selected. HTML, CSS, Javascript.</p>
                                    <div className="project-button-container">
                                        <a className="button is-link modal-button" href="https://github.com/chenmichael2/Spaceship-Racer"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="card is-shady">
                            <div className="card-image">
                                <a href="https://viral-covid.herokuapp.com/">
                                    <figure className="image is-4by3">
                                        <img src="viral.png" alt="Viral Project Image" />
                                    </figure>
                                </a>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <h4>Viral</h4>
                                    <p className="card-paragraph">A team project that uses MongoDB, API, and React to provide data on COVID statistics and user input vaccination sites with reviews and voting</p>
                                    <div className="project-button-container">
                                        <a className="button is-link modal-button" href="https://github.com/cspdevs000/viral-app"><i class="fab fa-github need-space"></i>Front</a>
                                        <a className="button is-link modal-button" href="https://github.com/justinluu8235/viral-api" target="_blank"><i class="fab fa-github need-space"></i>Back</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4 modal-button" data-target="modal-image">
                        <div className="card is-shady">
                            <div className="card-image">
                                <a href="https://organizeee-app.herokuapp.com/" target="_blank">
                                    <figure className="image is-4by3">
                                        <img src="organize.png" alt="Organize Project Image" />
                                    </figure>
                                </a>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <h4>Organize</h4>
                                    <p className="card-paragraph">This app provides a simple to-do list made with React and MongoDB. Also provides authentication to tailor the list to specific users.</p>
                                    <div className="project-button-container">
                                        <a className="button is-link modal-button" href="https://github.com/chenmichael2/organize-frontend" target="_blank"><i class="fab fa-github need-space"></i>Front</a>
                                        <a className="button is-link modal-button" href="https://github.com/chenmichael2/organize-back" target="_blank"><i class="fab fa-github need-space"></i>Back</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section >
        )
    }
}

export default Projects;