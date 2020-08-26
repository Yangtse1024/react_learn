import React, { Component } from "react";
import "antd/dist/antd.css"
import { Input, Button, List } from "antd";
import store from "./store";
import {debounce} from "./utils/utils";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onInputChange_debounce = debounce(this.onInputChange_debounce, 500);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }
    onInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
        this.onInputChange_debounce(e.target.value);
    }
    onInputChange_debounce(value){
        console.log(value);
        const action = {
            type: "changeInput",
            value: value
        }
        store.dispatch(action);
    }

    storeChange(){
        console.log('变了');
        this.setState(store.getState())
    }

    onButtonClick(){
        console.log('fuck');
        const action = {
            type: "addItem",
        }
        store.dispatch(action);
    }
    deleteItem(index){
        const action = {
            type: "deleteItem",
            index
        }
        store.dispatch(action);
    }

    render() {
        const data = []
        return (
            <div style={{margin: "10px"}}>
                <div>
                    <Input value={this.state.inputValue} onChange={this.onInputChange} placeholder="请输入新建项名称" style={{width: 250, marginRight: 10}}></Input>
                    <Button type="primary" onClick={this.onButtonClick}>添加</Button>
                </div>
                <div style={{marginTop: 10, width: 300}}>
                    <List bordered
                          dataSource={this.state.todoList}
                          renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{index + 1} {item}</List.Item>)}
                    />
                </div>
            </div>
         );
    }
}

export default TodoList;
