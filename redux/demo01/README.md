# Redux

1. 安装redux
    ```
    npm install redux -D
    ```
2. src 下新建store 目录，store 目录中新建index.js
    ```js
    import {createStore} from "redux";
    const store = createStore();
    
    export default store
    ```
3. store 下新建 reducer.js 文件
    ```js
    const defaultState = {};
    export default (state = defaultState, action) => {
        return state;
    }
    ```
4. 在index.js 中引入 reducer 这个管理员,然后在createStore 中加入，完成reducer的注入
    ```js
    import {createStore} from "redux";
    import reducer from "./reducer";
    const store = createStore(reducer);
    
    export default store
    ```
5. 在reducer中设置默认state，将todolist的值添加进来
    ```js
    const defaultState = {
        inputValue: "",
        todoList: [
            "晨会",
            "和项目经理打架",
            "下班"
        ]
    };
    ```
6. 在业务文件中引入 store，使用store.getState()获取redux的state
7. 安装redux-devtool，在createStore中添加一个参数
    ```js
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ```
8. 要修改redux的state，可以分发（dispatch）行为（action）
     ```js
     const action = {
         type: "changeInput",
         value: value
     }
     store.dispatch(action);
     ```
9. 在reducer中处理action，根据action的type进行不同的操作，注意，reducer不能改变state，state只能由state自身改变，reducer对state进行深拷贝后，对深拷贝对象进行处理，然后返回该对象，交由state处理。
    ```js
    export default (state = defaultState, action) => {
        console.log(state, action);
        let newState = deepClone(state);
        switch (action.type) {
            case 'changeInput':
                newState.inputValue = action.value;
                break;
            case 'addItem':
                newState.todoList.push(newState.inputValue);
                break;
            case 'deleteItem':
                newState.todoList.splice(action.index, 1);
                break;
            default:
                break;
        }
        return newState;
    }
    ``` 
10. 编写redux改变时做出响应的函数并在构造函数中订阅，redux 发生变化即调用此函数
    ```js
    storeChange(){
        console.log('redux变了');
        this.setState(store.getState())
    }
    ```
    ```js
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
    ```
   
