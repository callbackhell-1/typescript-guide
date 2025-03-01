function identity<T>(arg: T): T {
  return arg;
}

identity<string>('Hello'); // T is string
console.log(identity<number>(55)); // T is number

function logArray<T>(arr: T[]): void {
  arr.forEach((element) => {
    console.log(element);
  });
}

logArray<string>(['Apple', 'Banana', 'Orange']);


/**
 what is logArray<string> mean??
logArray<string>(["Apple", "Banana", "Orange"]); means T is string, making arr: string[].

what if we have "banana",3,5?
- If you pass ["Banana", 3, 5] to logArray, it will cause a type error in TypeScript because the function expects an array of a single type (T[]).

 */

//************* FUNCTION OVERLOADING WITH TS GENERICS *************/

// example
/**
 * 
 function add<T>(a: T, b: T): T {
  console.log(a + b);
  return a + b;
}
 *  Error : // Error: Operator '+' cannot be applied to type 'T'
why ?
: The issue is that TypeScript doesn't know that type T can be added with the + operator. The generic type T could be any type - it could be a string, number, boolean, or a custom object, and not all types support the + operation.
 */


// example
function add<T>(a: T, b: T): void {
  console.log(typeof a);
  console.log(typeof b)
}

// add<number | string>(12, "hello");
add<number>(12, 5);

// example 2
function add2<T, U>(a: T, b: U): void {
  console.log(typeof a);
  console.log(typeof b)
}

add2<string, number>("Hello", 5);
add2(5, "Hello")
/**
 Explanation :
 line 56 : we explicitly saying that first arg will be string and 2nd argument will be number.
 line 57 : we are not explicity defining the Data types.
 so :
 in 1st case : T-> string, U -> number 
 in 2nd case: T -> number, U -> string
 */