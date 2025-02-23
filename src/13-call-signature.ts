type Student = {
  name: string;
  age: number;
  greet: (country: string) => string; // call signature, which let us know that whats the return typeof the greet method, type of parameter
};

const student1: Student = {
  name: 'John',
  age: 55,
  greet: (country): string => {
    return `country is :${country}`;
  },
};

console.log(student1.greet('Japan'));
