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
[Click here from Example Explanation](./any_unknown.ts)

## Terminologies:

#### Type Annotation :

- Explicitly specifying type of a variables/functions : `num1: number`

#### Type inference :

- Ability of TS compiler to automatically determine and assign type to variable,function return and expression based on their context

```ts
let name = 'John';
name = 10; // Error : Type 'number' is not assignable to type 'string'
```
