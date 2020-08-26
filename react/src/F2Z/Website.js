import React from "react";
import Name from "./Name";
import Link from "./Link";
import Event from "./Event";

class Website extends React.Component{
    constructor() {
        super();
        this.state = {
            name: 'lanshuai',
            link: 'http://geeklan.cn'
        }
    }
    render() {
        return(
            <div>
                <Name name={this.state.name}></Name>
                <Link link={this.state.link}></Link>
                <Event></Event>
            </div>
        )
    }
}

export default Website