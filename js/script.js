import {sayHi as s, sayHi} from './functions.js';
import {data} from './data.js'

sayHi(data);

let arr=0;

function getArr(){
    console.log(arr);
}

console.log(arr);
arr=5
getArr();
