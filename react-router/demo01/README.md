# React-Router
1. 安装 react-router
    ```js
    npm install --save react-router-dom
    ```
2. 新建AppRouter 文件，引入react-router相关的三个模块
    ```js
    import { BrowserRouter as Router, Route, Link } from "react-router-dom"
    ```
3. 设置路由跳转, 点击跳转
    ```js
    <Router>
        <ul>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/list"}>list</Link></li>
        </ul>
        <Route path={"/"} exact component={Index}></Route>
        <Route path={"/list/"} exact component={MyList}></Route>
    </Router>
    ```
4. 动态传值  
    步骤： 设置规则--传递值--接收值--显示内容
    跳转前设置id
    ```js
    <Router>
        <ul>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/list/12345"}>list</Link></li>
        </ul>
        <Route path={"/"} exact component={Index}></Route>
        <Route path={"/list/:id"} exact component={MyList}></Route>
    </Router>
    ```
   在跳转到的组件中获取传过来的值
    ```js
    componentDidMount() {
        console.log(this.props.match.params.id); // 12345
    }
    ```
5. 重定向
    使用 Redirect 标签重定向
    ```js
    <Redirect to={"/home"}></Redirect>
    ```
   编程式重定向
    ```js
    this.props.history.push("/home");
    ```
    
