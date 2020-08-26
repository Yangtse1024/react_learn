import React from 'react';

// 普通 语法
//
// function Test() {
//     return (
//         <div>
//             测试一下
//         </div>
//     )
//
// }

// ES6 语法
class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.timerId = setInterval(()=>{
            this.tick();
        },1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return(
            <div>
                什么东西？ES6！<br/>
                参数是{this.props.p}<br/>
                现在是{this.state.date.toLocaleTimeString()}
            </div>
        )
    }

}

export default Test