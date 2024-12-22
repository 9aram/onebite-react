let num1 = 20;
let ms = String(num1);

console.log(num1 + "입니다.");

num1 += 10;
console.log(num1 + "입니다.");

var res = num1 % 3 === 0 ? "3의배수입니다" : "3의배수가 아닙니다.";

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("cat");
    break;
  }
  case "dog": {
    console.log("dog");
    break;
  }
  default: {
    console.log("NaN");
  }
}
