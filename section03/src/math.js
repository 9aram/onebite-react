//math 모듈

export function add(a, b) {
    return a+b;
}

export function sub(a, b) {
    return a-b;
}

export default function multiply(a, b) {
    return a-b;
}

/* 
// CJS
module.exports = { // 모듈이라는 내장객체에 export라는 프로퍼티의 값으로 객체를 저장해준다. 이 객체안에 각각 프로퍼티로 내보내고 싶은값을 넣어준다
  //  add : add, //add라는프로퍼티의 값으로 add 함수를 넣어준다
  //  sub : sub //밸류값으로 사용되는 함수의 이름과 키 값이 같을 경우 변수나 함수의 이름만 명시해줘도 된다
    add,
    sub,
}; 
*/
//ESM
//export {add, sub};