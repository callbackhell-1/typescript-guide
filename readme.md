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
