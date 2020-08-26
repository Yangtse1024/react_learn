import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from "./shopping_cart/App"
import * as serviceWorker from './serviceWorker';
import Test from "./test/Test";
import Website from "./F2Z/Website";
import Switch from "./Switch";

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Test p={1}/>, document.getElementById('root'));
// ReactDOM.render(<Website></Website>, document.getElementById('root'));
// ReactDOM.render(<Switch></Switch>, document.getElementById('root'));
ReactDOM.render(<App></App>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
