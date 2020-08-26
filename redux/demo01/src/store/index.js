/**
 * @author:  lanshuai
 * @Date: 2020-08-25
 * @description
 */
import {createStore, compose} from "redux";
import reducer from "./reducer";

const store = createStore(reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
