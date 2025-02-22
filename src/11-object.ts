// in js
const person = {
  name: 'John',
  age: 112,
  isStudent: true,
  address: {
    city: 'LA',
    pincode: 123,
  },
};

// let pincode = (person.address.pincode = '123');
// This will throw an error as pincode is of type number we can't assign string.
//how number ? -> type inference

// in ts
const person2: {
  name: string;
  age: number;
} = {
  name: 'John',
  age:15   
};

