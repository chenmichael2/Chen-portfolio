import React, { Component } from "react";

class Academic extends Component {
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

export default Academic;