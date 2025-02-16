console.log('I am Typescript');

// Add two number
let num1: number = 5;
let num2: number = 15;
console.log(num1 + num2);

//using function

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

let result: number = sum(5, 5);
console.log(result);

let nanValue: number = NaN; //NaN is number, so it is valid. 
