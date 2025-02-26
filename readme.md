# Typescript :

### Language that uses TS :

- Angular
- Vue
- NextJs

## Intro to TS :

- TS is superset of JS.
- All valid JS code is TS code.
- TS catches error at compile time instead of runtime unlike JS.
- Browser can't understand TS, so we need to convert our TS code to JS code.
- TS supports static typing.

## TS configuration file :

`tsc --init`

## Data Types in TS :

![Alt text](images/dataTypes.png)

- number : integer,floating
- boolean
- string
- bigint
  - Number type can have max of 9007199254740991 , beyond this we have to use bigInt
  - add `n` in the last
  - bigInt
- any

  - most flexible type.
  - turn off all type checking for variable & expression.
  - Helpful in case of API call data, where we don't know the type of the data.
  - Code will feel like writing in JS.

  ```ts
  let myName: any = 'John Doe';
  myName = 12;
  myName = false;
  ```

- unknown
  - safer than `any` because it enforces the type checking & type safety
  - variable of type unknown can hold value of any type.

### Difference Between any and unknown in TypeScript

![Alt text](images/any_unknown.png)
[Click here from Example Explanation](./src/4-any_unknown.ts)

## Terminologies:

#### Type Annotation :

- Explicitly specifying type of a variables/functions : `num1: number`

#### Type inference :

- Ability of TS compiler to automatically determine and assign type to variable,function return and expression based on their context

```ts
let name = 'John';
name = 10; // Error : Type 'number' is not assignable to type 'string'
```

### Iteration Method in Array :

[Difference Between `forEach`, `for` Loop & `for...of`](./src/9-different-for-loop.md)

### Map, Filter and Reduce

[Difference Between `map()`, `filter()`, and `reduce()` in TypeScript](./src/10-map-filter-reduce.md)

### type alias

- Instead of defining type for each object , we can create a type and assign tit to all the object, also it contains optional property.

### call signature

- Declaration/defination of a function, which includes func name, parameter and return type.
- Defines the str and type info of the function.

### enums

- set of related values & choose one value from multiple options.
- Enums make it easier to work with a group of related values by giving them meaningful names instead of using plain numbers or strings.

#### When to Use Enums

- When you have a fixed set of related constants (e.g., days of the week, status codes, directions).
- When you want to improve code readability by using meaningful names instead of magic numbers or strings.
- You have a fixed list of options
- You want to avoid typos/magic values
- You need autocomplete and type safety

### Tuple

- A tuple is a special data structure in TypeScript that allows you to store a fixed-size collection of elements, where each element can have a different type.
- Think of it as an array, but with strict rules about the types and order of its elements.

#### Tuple vs Array

- Array: All elements have the same type.

```ts
let numbers: number[] = [1, 2, 3];
```

- Tuple: Elements can have different types, and the order matters.

```ts
let person: [string, number] = ['Alice', 30];
```

#### Syntax

```ts
let tupleName: [type1, type2, type3, ...] = [value1, value2, value3, ...];
```

#### Key Features of Tuples

1. Fixed Length

- Tuples have a fixed number of elements. Adding or removing elements will cause a TypeScript error.

```ts
let point: [number, number] = [10, 20];
point.push(30); // Error: Tuple has a fixed length
```

2. Type Order Matters

- The order of types in a tuple is strict. Swapping values will cause an error.

```ts
let data: [string, number] = ['Alice', 30];
data = [30, 'Alice']; // Error: Type 'number' is not assignable to type 'string'
```

3. Optional Elements

- You can make some elements optional using `?`.

```ts
let optionalTuple: [string, number?] = ['Alice'];
```

- optionalTuple[0] is "Alice".

- optionalTuple[1] is undefined (optional)

4. Rest Elements

- You can use the rest operator (`...`) to allow additional elements of a specific type.

```ts
let rgb: [number, number, number, ...number[]] = [255, 0, 0, 128, 64];
```

- The first 3 elements are fixed (255, 0, 0)
- The rest are optional numbers (128, 64)

#### When to Use Tuples

- Fixed-Size Data: When you know exactly how many elements you need and their types.
  - Example: Coordinates ([x, y]), RGB colors ([r, g, b]).
- Returning Multiple Values: When a function needs to return more than one value.
- Strict Typing: When you want to enforce the types and order of elements.

#### When NOT to Use Tuples

- Dynamic Data: If the number of elements or their types can change, use an array or object instead.

- Complex Data: For deeply nested or complex structures, prefer objects or classes.

### Example: Tuple vs Object

#### Tuple

```ts
let user: [string, number] = ['Alice', 30];
console.log(user[0]); // "Alice"
console.log(user[1]); // 30
```

#### Object

```ts
let user = { name: 'Alice', age: 30 };
console.log(user.name); // "Alice"
console.log(user.age); // 30
```

### Key Takeaways

- Tuples are fixed-size arrays with strictly typed elements.

- Use tuples when you need to enforce the order and type of elements.

- Avoid tuples for dynamic or complex data (use objects or arrays instead).
