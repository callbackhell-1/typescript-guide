//unions ( | )

let id: number | string;
id = 5; //valid
id = 'five'; // valid
// id = true; //invalid

function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(`Id of the string is ${id.toUpperCase()}`);
  } else {
    console.log(`Id of the Number is ${id.toFixed(2)}`);
  }
}

printId(23);
printId('Twenty three');

// Intersection ( & )
type Person1 = {
  name: string;
  age: number;
};

type Employee = {
  dept: string;
  role: string;
  salary?: number;
};

type EmployeeDetails = Person1 & Employee;

const emp1: EmployeeDetails = {
  name: 'John',
  age: 12,
  role: 'HR',
  dept: 'Finance',
};
console.log(emp1);

// user type , premium or not
type BasicUser = {
  name: string;
  email: string;
};

type PremiumUser = {
  isPremium: boolean;
  discount: number | string;
};

type User = BasicUser & PremiumUser;

const user2 = (userDetails: User) => {
  if (userDetails.isPremium) {
    console.log(`user is premium so ${userDetails.discount}% discount`);
  } else {
    console.log(`Not a premium user`);
  }
};

user2({
  name: 'John',
  email: 'john@ElementInternals.com',
  isPremium: true,
  discount: 50,
});
