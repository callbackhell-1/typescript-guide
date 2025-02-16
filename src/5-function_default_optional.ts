//Default parameters
function displayData(name: string, age: number, role: string = 'user') {
  console.log(`Name is ${name}, age is ${age} & role is ${role}`);
}

displayData('John Doe', 55, 'admin');
displayData('John Wick', 35);

//optional Parameter
function displayUserData(name: string, age?: number, role: string = 'user') {
  console.log(`Name is ${name}, age is ${age} & role is ${role}`);
}

displayUserData('John Doe', 55, 'admin');
displayUserData('John Wick');
displayUserData('John Wick', undefined, 'admin');
