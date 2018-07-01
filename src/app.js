// import './utils.js'

import subtract, { square, add } from './utils.js'
import isSenior, { isAdult, canDrink } from './person.js'

console.log('App is Running....');
console.log(square(4));
console.log(add(4, 10));
console.log(subtract(4, 10));

console.log(isAdult(18));
console.log(isAdult(21));

console.log(canDrink(18));
console.log(canDrink(21));

console.log(isSenior(18));
console.log(isSenior(65));