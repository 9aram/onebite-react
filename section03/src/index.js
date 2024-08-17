/* 
//CJS 방식
//const moduleData = require("./math"); //require 함수가 현재경로의 math모듈로부터 객체형태로 내보내기 되어진 add,sub을 반환해준다

//console.log(moduleData.add(1,2));
//console.log(moduleData.sub(1,2));
// 객체의 구조분해 할당
const {add, sub} = require("./math");
console.log(add(1,2));
console.log(sub(1,2)); 
*/

//ESM방식
//import mul from "./math.js"
//import {add, sub} from "./math.js"; // 확장자 붙여줘야한다.
import mul,{add, sub} from "./math.js";
console.log(add(1,2));
console.log(sub(1,2)); 
console.log(mul(1,2)); 