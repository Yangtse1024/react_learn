/**
 * @author:  lanshuai
 * @Date: 2020-08-25
 * @description
 */
import {deepClone} from "../utils/utils";

const defaultState = {
    inputValue: "",
    todoList: [
        "晨会",
        "和项目经理打架",
        "下班"
    ]
};
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
            // return newState;
        case 'deleteItem':
            newState.todoList.splice(action.index, 1);
            break;
            // return newState;
        default:
            break;
    }
    return newState;
}
