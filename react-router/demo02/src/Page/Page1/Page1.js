/**
 * @author:  lanshuai
 * @Date: 2020-08-27
 * @description
 */
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Page1_1 from "./Page1_1/Page1_1";
import Page1_2 from "./Page1_2/Page1_2";

class Page1 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={"/page1/page1_1"}>页面 1-1 </Link>
                    <Link to={"/page1/page1_2"}>页面 1-2 </Link>
                </div>
                <div>
                    <Route path={"/page1/page1_1"} component={Page1_1}></Route>
                    <Route path={"/page1/page1_2"} component={Page1_2}></Route>
                </div>
            </Router>
        );
    }
}

export default Page1;
