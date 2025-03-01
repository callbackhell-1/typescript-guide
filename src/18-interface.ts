// 1. Basic Interface : Interface for User object
interface User1 {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user1: User1 = {
  id: 5,
  name: 'John',
  email: 'email@email.com',
  isActive: true,
};

//2. Optional Properties : Use ? to mark properties as optional:
interface User3 {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // optional
}
const user3: User3 = {
  id: 1,
  name: 'Bob',
  email: 'John@example.com',
  // email is optional, so we can omit it
};

// 3. Readonly Properties : Use readonly to make properties immutable:
interface Statuses {
  readonly id: number;
  isActive: boolean;
}

const userStatus: Statuses = {
  id: 5,
  isActive: false,
};

userStatus.isActive = true; // allowed
// userStatus.id =15; : error: Cannot assign to 'id' because it is read-only

// 4. Function in Interface : Define a method in an interface:

interface Greet {
  (name: string): string;
}

const greet: Greet = (name) => {
  return `hello ${name}`;
};

console.log(greet('John Wick'));

//5. Extending Interfaces  : Interfaces can extend other interfaces to inherit their properties:

interface Person2 {
  name: string;
  age: number;
}

interface Employee2 extends Person {
  employeeId: number;
}

const employee: Employee2 = {
  name: 'Alice',
  age: 30,
  employeeId: 123,
};

// 6. Interface for Arrays: Define the structure of an array:
interface StringArray {
  [index: number]: string; // Index signature
}

const fruits2: StringArray = ['Apple', 'Banana', 'Orange'];
console.log(fruits2[0]); // "Apple"

// 7. Interface for Functions : Define the structure of a function:
interface MathOperation {
  (a: number, b: number): number;
}

const add3: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

console.log(add3(2, 3)); // 5
console.log(multiply(2, 3)); // 6

// Example : You’re fetching data from an API and want to ensure the response has the correct structure.

interface ApiResponse<T> {
  status: string;
  data: T;
  message?: string;
}
/**
 * Question : 
 * ApiResponse<T>  why even this is required? cant we write ApiResponse{ status: string; data: T...}?
 * Explanation : No, we can't just write:
 interface ApiResponse {
    status: string;
    data: T; // Error: Cannot find name 'T'
    message?: string
}
    This would cause an error because TypeScript doesn't know what T is. The variable T needs to be declared somewhere before it's used.
    
    The <T> in interface ApiResponse<T> serves a specific purpose - it declares a type parameter (or type variable) that can be filled in later when someone uses the interface. This is what makes the interface generic.
 
 */
interface User5 {
  id: number;
  username: string;
  email: string;
}

async function fetchUser(): Promise<ApiResponse<User5>> {
  const response = await fetch('https://fakestoreapi.com/users/1');
  // Check if the response is OK (status code 200-299)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

fetchUser()
  .then((result) => {
    console.log(`The name is ${result.data.username} `);
  })
  .catch((err) => {
    console.log(`OOOPS something went wron in fetching the data!`);
  });
/**
 Explanation :
The return type is Promise<ApiResponse<User>>, which means:
It returns a Promise
When resolved, the Promise will contain an ApiResponse object
The data property of that response will be of type User
 */

//Example :
/**
 * Create an interface Car with properties like make, model, and year.
 
 Extend the Car interface to create a ElectricCar interface with an additional batteryRange property.
 
 Write a function that accepts a Car object and prints its details.
 */

interface Car {
  make: string;
  model: string;
  year: number;
}

interface ElectricCar extends Car {
  batteryRange: string;
}

function carDetails(car: ElectricCar) {
  console.log(car);
}
carDetails({
  make: 'bmw',
  model: 'gh45',
  year: 2023,
  batteryRange: '22 km',
});
