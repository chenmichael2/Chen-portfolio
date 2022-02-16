import React, { Component } from "react";
import Description from "./Description";

class Career extends Component {
    constructor(props) {
        super(props);
    }

    displayDescription() {
        const display = this.props.description.map((c, idx) => {
            return <Description key={idx} description={c}/>
        });
        return display;
    }

    render() {
        return(
            <div className="career-container">
                <h1 className="job-first">{this.props.title}</h1>
                <div className="job-second"><span>{this.props.role}</span> | <span>{this.props.date}</span></div>
                <ul className="job-description">{this.displayDescription()}</ul>
            </div>
        )
    }
}

export default Career;