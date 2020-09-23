//专门出口 -> 写公用的东西
export const a = 123;
// const b = [1,2,3];
export const b = [1,2,3];
export const c = { nickname: '小明' };
export function fn() {
    console.log('fn')
};
//export的常用书写方式
const d = { nickname: '小刚' };
const e = () => { console.log('我是e') };
const f = 'hello world';
export { d, e, f };

//export 所有被导出的东西都会被写在一个叫做Module的对象里边
const g = 1;
// export g;
// const obj = {1}
// function some_fn(){
//     console.log('我是some_fn')
// };
// export some_fn

// const obj_a = {};
// const obj_b = { hello: 'world', abc: 'xyz' };
// Object.assign( obj_a, obj_b )
// console.log(obj_a)

export const fn_a = () => { console.log('我是index.js里边的fn_a') };
export const some_a = 'some_a';

export const add = 'add';
export const acc = 'acc';

//被出口的东西，值是实时变化的
export let foo = { name: 'foo' };
setTimeout( () => {
    foo = {name: 'bar'};
},1000 );

const some_g = { name: 'some_g' };
export default some_g;//往module里边添加了一个default属性，值是some_g的值

//默认导出，只能使用一次
// const some_y = { name: 'some_y' };
// export default some_y;