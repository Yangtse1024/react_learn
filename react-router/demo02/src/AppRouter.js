/**
 * @author:  lanshuai
 * @Date: 2020-08-26
 * @description
 */
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom"
import Home from "./Page/Home/Home";
import Page1 from "./Page/Page1/Page1";
import Page2 from "./Page/Page2/Page2";
import "./AppRouter.css"

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div className={"mainDiv"}>
                    <div className={"leftNav"}>
                        <h3>一级导航</h3>
                        <ul>
                            <li><Link to={"/home"}>主页</Link></li>
                            <li><Link to={"/page1"}>页面1</Link></li>
                            <li><Link to={"/page2"}>页面2</Link></li>
                        </ul>
                    </div>
                    <div className={"rightMain"}>
                        <Redirect to={"/home"}></Redirect>
                        <Route path={"/home"} component={Home}></Route>
                        <Route path={"/page1"} component={Page1}></Route>
                        <Route path={"/page2"} component={Page2}></Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default AppRouter;
