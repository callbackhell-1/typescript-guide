// why and when to use type?

const person1: {
  name: string;
  age: number;
} = {
  name: 'John',
  age: 115,
};
/**
 * we can see that
{
  name: string;
  age: number;
}

This we have to give for all the person that we will create so instead of that we use type
 */

//Example /Application

type Person = {
  name: string;
  age: number;
  class?: string; // This is optional property
};

const john: Person = {
  name: 'John',
  age: 15,
};
