let myName: any = 'John Doe';
myName = 12;
myName = false;

let myAge: unknown = 20;
myAge = '20';
myAge = true;

// Difference b/w any and unknown

/* ------- 1. any ------------   */
let value: any;
value = 'Hello';
value = 42;
value.toUpperCase(); // ✅ No error, but might crash if value is not a string
//📌 Problem: No type safety—TypeScript allows anything, even if it leads to runtime errors.

/* -----------   2. unknown ------------*/
let value2: unknown;
value2 = 'Hello';
value2 = 42;

// ❌ Error: Property 'toUpperCase' does not exist on type 'unknown'.
// value.toUpperCase();

// ✅ Must check type first
if (typeof value2 === 'string') {
  console.log(value2.toUpperCase()); // ✅ Works safely
}
