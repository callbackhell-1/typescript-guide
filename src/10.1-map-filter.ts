const number: number[] = [1, 2, 3, 4];
console.log('original array', number);

//*******************map***************
//1. Double each number
const doubledArray = number.map((element) => {
  return element * 2;
});
console.log('original array', number);
console.log('double array : ', doubledArray);

//2. convert each number to string.
const numberToString = number.map((element) => {
  return element.toString();
});
console.log('original array', number);
console.log('converted to string array', numberToString);

//************filter***********/
const greaterThan3 = number.filter((element) => {
  return element > 3;
});

console.log(greaterThan3);
