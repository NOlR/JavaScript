//进口
//import 的参数是{写要进口什么} from '路径'(相对路径|绝对路径)
//在导入其他模块变量的时候使用as重新命名，不能使用默认值
import {
    a as aaa, 
    b as bbb, 
    c, 
    fn
} from './index.js';//把要进口的东西放在一个对象里边
console.log(aaa, bbb, c);
// console.log(b)
fn();
import { d, e, f } from './index.js';
console.log(d, e, f);

//import(进口|导入)的时候除了可以指定要导入的东西之外，还可以导入index.js里边全部导出的东西
//*表示引入全部的东西，单独的取一个名字 : as
import * as all from './index.js';
console.log(all)
// console.log(all.a, all.fn, all.e)

// const obj = { nickname: '小明' };
// const { nickname:abc } = obj;
// console.log(abc)

//第4行和第8行都是从index.js模块里边导入变量 -> 在编译的时候只会导入一次: import {a as aaa, b as bbb, c, fn, d, e, f} from './index.js'
//如果从同一个模块里边导入东西，只写一次

//import是静态加载的 -> js是编译型语言(执行之前先过一遍,第二遍读的时候才执行) 不是 解释型语言(读一行执行一行)
//import在第一遍读的时候执行 node.js require()
fn_a();
console.log(some_a);
import { fn_a, some_a } from './index.js';//在some模块里边声明一个fn_a变量值为index模块里fn_a的值

//import 不能写在函数，for循环，判断...里边
const path = './index.js';
// import {add} from './index.js';
// import { 'a' + 'dd' } from './index.js';
//不能动态引入的缺点：
// let some = 'add';
// if( some === 'add' ){
//     import {add} from './index.js';
// }else{
//     import {acc} from './index.js';
// }

//import(路径) -> 为了能够动态引入
let some = 'acc';
if( some === 'add' ){
    import('./index.js')
        .then( data => {
            const {add} = data;
            console.log(add)
        } )
        .catch( err => {
            console.log(err)
        } )
}else{
    import('./index.js')
        .then( data => {
            const {acc} = data;
            console.log(acc)
        } )
        .catch( err => {
            console.log(err)
        } )
};

//导入和导出的值都是实时更新的
import {foo} from './index.js';
console.log(foo);
setTimeout( () => {
    console.log(foo)
}, 1000 );

//这种写法引入的是index模块默认导出的值
import React from './index.js';//随便给默认导出的值命名
console.log(React);