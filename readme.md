# TypeScript

## Languages that Use TypeScript

- Angular
- Vue
- Next.js

## Introduction to TypeScript

- TypeScript (TS) is a superset of JavaScript (JS).
- All valid JS code is also valid TS code.
- TS catches errors at compile time instead of runtime (unlike JS).
- Browsers can't understand TS, so we need to compile it into JS.
- TS supports static typing.

## TS Configuration File

Initialize a TypeScript configuration file with:

```sh
tsc --init
```

## Data Types in TypeScript

![Data Types](images/dataTypes.png)

### Primitive Data Types

- `number`: Integer, floating-point numbers.
- `boolean`: `true` or `false`.
- `string`: Text values.
- `bigint`: Used for very large numbers (beyond `9007199254740991`). JavaScript may lose precision for numbers beyond this range, and `bigint` ensures accurate large-number calculations.
- `any`: Disables type checking, making code feel like JS.
- `unknown`: Safer than `any`, enforcing type checking.

```ts
let myName: any = 'John Doe';
myName = 12;
myName = false;
```

### Difference Between `any` and `unknown`

![Comparison](images/any_unknown.png)
[Example Explanation](./src/4-any_unknown.ts)

## TypeScript Terminologies

### Type Annotation

Explicitly specifying the type of variables/functions:

```ts
let num1: number;
```

### Type Inference

TypeScript automatically determines the type based on the assigned value:

```ts
let name = 'John';
name = 10; // Error: Type 'number' is not assignable to type 'string'
```

## Iteration Methods in Arrays

[Comparison of `forEach`, `for` Loop & `for...of`](./src/9-different-for-loop.md)

## Map, Filter, and Reduce

[Comparison of `map()`, `filter()`, and `reduce()`](./src/10-map-filter-reduce.md)

## Type Alias

Instead of defining a type for each object, we can create a reusable type alias:

```ts
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // Optional property
};
```

## Call Signature

Defines the structure of a function, including its name, parameters, and return type:

```ts
type Greet = (name: string) => string;
```

## Enums

Used for defining a set of named constants:

```ts
enum Status {
  Pending,
  Shipped,
  Delivered,
}

let orderStatus: Status = Status.Shipped;
```

### When to Use Enums

- When you have a fixed set of related constants (e.g., days of the week, status codes).
- To improve code readability by using meaningful names instead of magic numbers/strings.
- When autocomplete and type safety are required.

### `const enum` for Optimization

To avoid unnecessary JavaScript output, prefer `const enum` when possible:

```ts
const enum Status {
  Pending,
  Shipped,
  Delivered,
}
```

## Tuples

A tuple is a fixed-size collection of elements where each element can have a different type:

```ts
let person: [string, number] = ['Alice', 30];
```

### Tuple vs Array

- **Array**: All elements have the same type.

```ts
let numbers: number[] = [1, 2, 3];
```

- **Tuple**: Elements can have different types, and order matters.

```ts
let data: [string, number] = ['Alice', 30];
```

### Key Features of Tuples

1. **Fixed Length (but `push()` is allowed)**

   ```ts
   let point: [number, number] = [10, 20];
   point.push(30); // Allowed, but accessing point[2] will cause an error
   ```

2. **Type Order Matters**

   ```ts
   let data: [string, number] = ['Alice', 30];
   data = [30, 'Alice']; // Error
   ```

3. **Optional Elements**

   ```ts
   let optionalTuple: [string, number?] = ['Alice'];
   ```

4. **Rest Elements**

   ```ts
   let rgb: [number, number, number, ...number[]] = [255, 0, 0, 128, 64];
   ```

### When to Use Tuples

- Fixed-size data (e.g., coordinates `[x, y]`, RGB colors `[r, g, b]`).
- Returning multiple values from a function.
- Enforcing strict type and order constraints.

### Example: Tuple vs Object

**Tuple:**

```ts
let user: [string, number] = ['Alice', 30];
console.log(user[0]); // "Alice"
console.log(user[1]); // 30
```

**Object:**

```ts
let user = { name: 'Alice', age: 30 };
console.log(user.name); // "Alice"
console.log(user.age); // 30
```

### Tuple Behavior in TypeScript vs JavaScript

| Action                     | TypeScript Compile-Time | JavaScript Runtime |
| -------------------------- | ----------------------- | ------------------ |
| `push()`                   | ✅ Allowed (no error)   | ✅ Works           |
| Access `[2]`               | ❌ Error                | ✅ Works           |
| Declare `[number, number]` | ✅ Fixed-length type    | ❌ Dynamic array   |

## Union Types (`|`)

A union type allows a variable to hold multiple types:

```ts
let variable: string | number;
```

### When to Use Union Types

- When a value can be one of several types.
- Example: A function that accepts both string and number inputs.

## Intersection Types (`&`)

An intersection type combines multiple types into one:

```ts
type Employee = { id: number };
type User = { name: string };

let person: Employee & User = { id: 1, name: 'Alice' };
```

### Important Note on Intersection Types

Intersection types **merge properties**, meaning all properties from both types must be present.

```ts
// Valid
let person: Employee & User = { id: 1, name: 'Alice' };

// Error: Property 'name' is missing
let employee: Employee & User = { id: 1 }; // ❌ TypeScript error
```

## Generics

Generics allow us to create reusable components or functions that can work with multiple data types.

```ts
function identity<T>(arg: T): T {
  return arg;
}

identity<string>('Hello'); // T is string
console.log(identity<number>(55)); // T is number
```

### 1. Type Inference

TypeScript can often infer the type for `T` automatically:

```ts
let output = identity('Hello'); // T is inferred as string
```

### 2. Constraints

You can restrict the types that `T` can be using the `extends` keyword:

```ts
function logLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}

logLength('Hello'); // Works (string has a length property)
logLength([1, 2, 3]); // Works (array has a length property)
logLength(42); // Error: number doesn't have a length property
```

### 3. Default Types

You can provide a default type for `T`:

```ts
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

let arr1 = createArray(3, 'Hello'); // T is string
let arr2 = createArray(3, 42); // T is number
```

### 4. Multiple Type Parameters

You can use multiple generics in the same definition:

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

let result = merge({ name: 'Alice' }, { age: 30 });
// result is { name: "Alice", age: 30 }
```

### When to Use Generics

- **Reusable Functions**: When you want a function to work with multiple types.
- **Data Structures**: When creating classes like Box, Queue, or Stack.
- **API Wrappers**: When fetching data with different response types.
- **Utility Libraries**: When building libraries like Lodash or Ramda.

## Interface

### What is an Interface?

An interface is a way to define a contract for the structure of an object. It describes what properties and methods an object should have, along with their types. Interfaces are purely a TypeScript feature—they don’t exist in JavaScript and are removed during compilation.

### Why Use Interfaces?

- **Type Safety**: Ensures objects have the correct structure.
- **Code Readability**: Makes it clear what properties and methods an object should have.
- **Reusability**: Define a contract once and reuse it across your codebase.
- **Tooling Support**: Get autocomplete and type-checking in your editor.

### Syntax

```ts
interface InterfaceName {
  property1: type;
  property2: type;
  method1(): returnType;
}
```

### Interfaces vs Types

What’s the difference between interface and type? Here’s a quick comparison:

| Feature            | Interface                              | Type                                          |
|--------------------|--------------------------------------|-----------------------------------------------|
| Extensibility     | Can be extended using `extends`      | Cannot be extended (but can use `&`)         |
| Union/Intersection | Cannot represent unions/intersections | Can represent unions (`|`) and intersections (`&`) |
| Merging           | Supports declaration merging         | Does not support merging                     |
| Use Case          | Best for defining object shapes      | Best for complex types (e.g., unions, intersections) |


### When to Use Interfaces

- **Defining Object Shapes**: Use interfaces for objects, classes, and function signatures.
- **API Contracts**: Define the structure of API requests/responses.
- **Reusable Contracts**: Share interfaces across your codebase.
