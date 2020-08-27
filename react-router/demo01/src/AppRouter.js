/**
 * @author:  lanshuai
 * @Date: 2020-08-26
 * @description
 */
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Index from "./Pages";
import MyList from "./Pages/MyList";
import Home from "./Pages/Home";

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li><Link to={"/"}>home</Link></li>
                        <li><Link to={"/list/12345"}>list</Link></li>
                    </ul>
                    <Route path={"/"} exact component={Index}></Route>
                    <Route path={"/list/:id"} exact component={MyList}></Route>
                    <Route path={"/home/"} component={Home}></Route>
                </Router>
            </div>
        )
    }
}

export default AppRouter;
