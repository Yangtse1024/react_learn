/**
 * @author:  lanshuai
 * @Date: 2020-08-26
 * @description
 */
import React, {Component} from 'react';
import { Link, Redirect } from "react-router-dom";
import Home from "./Home";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 123, content: "文章内容 - 1" },
                { cid: 456, content: "文章内容 - 2" },
                { cid: 789, content: "文章内容 - 3" }
            ]
        }
        this.props.history.push("/home");
    }

    render() {
        return (
            <div>
                {/*<Redirect to={"/home"}></Redirect>*/}
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={index}>
                                <Link to={`/list/${item.cid}`}>
                                    { item.cid }  { item.content }
                                </Link>
                            </li>
                        )
                    }
                </ul>

            </div>
        );
    }
}

export default Index;
