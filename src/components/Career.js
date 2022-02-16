import React, { Component } from "react";

class Career extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Career;