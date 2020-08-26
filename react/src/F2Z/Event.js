import React from "react";
import PropTypes from 'prop-types';

class Camper extends React.Component{
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <p>{this.props.name}</p>
        )
    }
}
Camper.defaultProps = {
    name: 'CamperBot'
}
Camper.propTypes = {
    name: PropTypes.string
}
class Event extends React.Component{
    constructor() {
        super();
        this.state = {
            link: 'http://www.baidu.com'
        }
    }

    render() {
        return (
            <div>
        <a href="#" onClick={this.dianji}>
            被点击了
            </a>
    </div>
        )
    }

    dianji(e){
        e.preventDefault(); // 阻止默认行为
        console.log(e);
    }

}

export default Event
