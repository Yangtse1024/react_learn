/**
 * @author:  lanshuai
 * @Date: 2020-08-13
 * @description
 */
import React from "react";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stuffs: [
                {
                    name: "雪碧 300ml",
                    price: 2.5,
                    num: 0
                },
                {
                    name: "王老吉 ",
                    price: 5,
                    num: 0,
                },
                {
                    name: "面包",
                    price: 3.5,
                    num: 0
                },
                {
                    name: "毛巾",
                    price: 10,
                    num: 0
                }
            ],
            // allCost:
        }
    }
    render() {
        return (
            <div>
                这是一个购物车
            </div>
        );
    }

}

export default App
