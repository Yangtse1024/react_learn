/**
 * @author:  lanshuai
 * @Date: 2020-08-25
 * @description
 */

function debounce(fn, delay = 100) {
    let timer = null;
    return function () {
        const args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}

function deepClone(obj) {
    if(typeof obj !== "object" || obj == null){
        return obj;
    }
    let res = {};
    if(obj instanceof Array){
        res = [];
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            res[key] = obj[key];
        }
    }
    return res;
}

export {
    debounce,
    deepClone
}
