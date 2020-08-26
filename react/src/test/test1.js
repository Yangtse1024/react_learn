// let obj = {
//     name: 'jack',
//     getName:function () {
//         console.log(this.name);
//
//     }
// }
// obj.getName();

// let obj = {
//     name: 'jack',
//     getName:function () {
//         console.log(this.name);
//
//     }
// }
// let tmp = obj.getName;
// tmp();

let obj = {
    name: 'jack',
    getName:function () {
        console.log(this.name);

    }
}
let tmp = obj.getName.bind(obj);
tmp();
obj.getName.call(obj);
obj.getName.call(obj);