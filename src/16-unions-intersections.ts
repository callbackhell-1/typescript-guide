//unions
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
