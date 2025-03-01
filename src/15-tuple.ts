// Example 1: Basic Tuple
let user: [string, number, boolean] = ['Alice', 25, true];
/**
 user[0] is a string ("Alice")
 user[1] is a number (25)
 user[2] is a boolean (true)
 */

//  Example 2: Tuple with Mixed Types
let order: [string, number, boolean] = ['Pizza', 12.99, true];
/**
 order[0] is a string ("Pizza")
 order[1] is a number (12.99)
 order[2] is a boolean (true)
 */

// Example 3 :
function fetchUser1(): [string, number, boolean] {
  // Simulate API call
  return ['Bob', 25, true];
}

const [userName, userAge, isActive] = fetchUser1();
console.log(`${userName} is ${userAge} years old and active: ${isActive}`);
// Output: "Bob is 25 years old and active: true"

// Real Life example cart

type CartItem = [string, number, number];

let cart: CartItem[] = [];

//Add item to cart
const addItemToCart = (name: string, price: number, quantity: number): void => {
  cart.push([name, price, quantity]);
  console.log('my cart is', cart);
};
