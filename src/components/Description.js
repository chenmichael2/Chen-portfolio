import React, { Component } from "react";

class Description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li>
                - {this.props.description}
            </li>
        )
    }
}

export default Description;