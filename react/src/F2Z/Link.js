import React from "react";
import PropTypes from 'prop-types';

class Link extends React.Component{
    render() {
        return (
            <p>
                <a href={this.props.link} target="_blank">
                    {this.props.link}
                </a>
            </p>
        )
    }

}

// prop验证
Link.propTypes = {
    link: PropTypes.string.isRequired
}


export default Link