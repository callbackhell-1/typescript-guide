//1. Define a string and assign it Hello TS
let myVar: string = 'Hello TS';

//2.print your name
let firstName: string = 'John';
let lastName: string = 'Doe';
let fullName: string = firstName + lastName;
console.log(fullName);

//3.string length
let sentence: string =
  'Just replace the URL within the parentheses with the direct link to your image. Be mindful of the rights and permissions associated with the external image you are using. Ensure the URLs are stable and won’t change over time, as broken images in your README can make your project look neglected.';

let sentenceLength: number = sentence.length;
console.log(sentenceLength);

//4.uppercase and lowercase
let sentence1: string =
  'Just replace the URL within the parentheses with the direct link to your image. Be mindful of the rights and permissions associated with the external image you are using. Ensure the URLs are stable and won’t change over time, as broken images in your README can make your project look neglected.';

let uppercase: string = sentence.toLocaleUpperCase();
let lowercase: string = sentence.toLocaleUpperCase();
console.log('Uppercase sentence : ', uppercase);
console.log('Lowercase Sentence', lowercase);

//5.substring
let sentence2: string =
  'Just replace the URL within the parentheses with the direct link to your image. Be mindful of the rights and permissions associated with the external image you are using. Ensure the URLs are stable and won’t change over time, as broken images in your README can make your project look neglected.';
let shortText: string = sentence2.substring(0, 10);
console.log(shortText);

// 6. string comparision
let sentence3: string =
  'Just replace the URL within the parentheses with the direct link to your image. Be mindful of the rights and permissions associated with the external image you are using. Ensure the URLs are stable and won’t change over time, as broken images in your README can make your project look neglected.';

let sentence4: string =
  'Just replace the URL within the parentheses with the direct link to your image. .';

let result2: boolean = sentence3 === sentence4;
console.log(result2);

//7.string template
let productName: string = 'Computer dispaly';
let productPrice: number = 5500;
console.log(
  `The name of the product is ${productName} & price of the product is ${productPrice}`
);
