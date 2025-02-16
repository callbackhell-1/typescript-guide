// Define Array:

//1. using Square brackets
const myNumbers: number[] = [1, 2, 5, 5];

//2. using Array constructor
const myNumbers1: number[] = new Array(4, 5, 5, 5, 5);

//3. Array.of
const aboutMe: any[] = Array.of('John', '55', '36', 'LA');

/*
Error : const aboutMe: any[] = Array.of('John', 55, 36, 'LA');
Error reason : If the first element is a string ('John'), TypeScript assumes all subsequent arguments should also be of type string, which conflicts with 55 and 36 (numbers).

fixes: 
1. Best Practice :  const aboutMe: (string | number)[]
2. const aboutMe: [string, number, number, string]


*/
