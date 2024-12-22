//함수선언
function greeting() {
  console.log("hi");
}
//함수안의 함수도 가능
//자바스크립트 호이스팅
//선언문이 호출문보다 아래에 있어도 내부적으로 끌어올려져서 사용된다.
let area1 = getArea(10, 20);
function getArea(w, h) {
  function another() {
    console.log("another");
  }
  another();
  let area = w + h;
  return area;
}
varB();
let varB = function () {};
let varC = () => area1;
