import React from "react";

class Switch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            name: 'jack'
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this);
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }))
        console.log('测试')
    }
    preventPop(name, e){
        // e.preventDefault();
        console.log(name);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isToggleOn ? "On" : "Off"}
                </button>
                <br/>
                <a href="http://www.baidu.com" onClick={this.preventPop(this, this.state.name)}>阻止默认操作</a>
            </div>
        )
    }

}

export default Switch
