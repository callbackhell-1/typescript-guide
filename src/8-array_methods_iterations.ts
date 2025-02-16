const fruits: string[] = ['Banana', 'apple', 'orange'];

//push
fruits.push('Guava');
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

//iteration
/**
 * for
 * forEach
 * for..of
 */

//1. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log('***********');

//2. for of
for (const element of fruits) {
  console.log(element);
}
console.log('***********');

//3. forEach
fruits.forEach((element) => {
  console.log(element);
});
console.log('***********');
