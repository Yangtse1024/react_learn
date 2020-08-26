import React from "react";
import PropTypes from 'prop-types';
import Link from "./Link";

class Name extends React.Component{
    render() {
        return(
            <p>
                <span>{this.props.name}</span>
            </p>
        )
    }
}

// prop验证
Name.propTypes = {
    name: PropTypes.string
}


export default Name