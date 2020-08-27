/**
 * @author:  lanshuai
 * @Date: 2020-08-26
 * @description
 */
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cid: ""
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.setState({
            cid: this.props.match.params.id
        })
    }

    render() {
        return (
            <div>
                {this.state.cid}
            </div>
        );
    }
}

export default MyList;
