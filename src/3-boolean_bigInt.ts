/* boolean */

//1. check isDivisibleBy 4 & 8
function isDivisibleBy4And8(num: number): boolean {
  if (num % 4 === 0 && num % 8 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisibleBy4And8(32));

/* bigInt */
const bigNumber: bigint = 9007199254740991n;
console.log(bigNumber);

const anotherBigNumber: bigint = BigInt("9007199254740991");
console.log(anotherBigNumber);
