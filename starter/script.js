'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const { restName, openingHours, categories } = restaurant;
console.log(restName, openingHours, categories);

const {
  restName: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
// const {s
//   menu: [],
//   starterMenu: starters = [],
// } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // {a, b} = obj; //Uncaught SyntaxError: Unexpected token '=' (at script.js:56:8) we get this mistake, because after curly braces javascript expects a block of code
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;

// console.log(o, c);

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Destructuring arrays

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(x, y, z);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // Switching variables

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // let practice = [1, 2, 3, 4, 5];
// // let [e, f, j, k, l] = practice;
// // console.log(e, f, j, k, l);

// // const s = e;
// // e = f;
// // f = s;
// // console.log(e, f, j, k, l);

// //using destructuring
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // // Receive 2 return values from a function
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // // Nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // // Default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

// //---------- EXAMPLE 1 ---------
// //SWAP THE VALUE OF TWO VARIABLES
// // let a = 1;
// // let b = 2;

// // [a, b] = [b, a];
// // console.log(a, b);

// // //---------- EXAMPLE 2 ---------
// // //SWAP 2 ELEMENTS IN AN ARRAY
// // const colors = ['red', 'green', 'blue', 'black', 'white'];
// // [colors[0], colors[4]] = [colors[4], colors[0]];
// // console.log(colors);

// //---------- EXAMPLE 3 ---------
// //ASSIGN ARRAY ELEMENTS TO VARIABLES

// // const colors = ['red', 'green', 'blue', 'black', 'white'];
// // const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// // console.log(firstColor);
// // console.log(secondColor);
// // console.log(thirdColor);
// // console.log(extraColors);

// // //---------- EXAMPLE 4 ---------
// // // EXTRACT VALUES FROM OBJECTS
// // const person1 = {
// //   firstName: 'Spongebob',
// //   lastName: 'SquarePants',
// //   age: 30,
// //   job: 'Fry Cook',
// // };

// // const person2 = {
// //   firstName: 'Patrick',
// //   lastName: 'Star',
// //   age: 34,
// // };

// // // const { firstName, lastName, age, job } = person1;
// // const { firstName, lastName, age, job = 'Unemployed' } = person2;
// // console.log(firstName);
// // console.log(lastName);
// // console.log(age);
// // console.log(job);

// // //---------- EXAMPLE 5 ---------
// // // DESTRUCTURE IN FUNCTION PARAMETERS

// // function displayPerson({ firstName, lastName, age, job = 'Unemployed' }) {
// //   console.log(`name: ${firstName},${lastName} `);
// //   console.log(`age: ${age}`);
// //   console.log(`job: ${job}`);
// // }

// // displayPerson(person1);
// // displayPerson(person2);

// //SPREAD OPERATOR
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const joinedMenu = [...restaurant.mainMenu, ...arr];
// console.log(joinedMenu);

// //Iterables: arrays, strings, maps, sets. NOT objects

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// console.log(...str);
// console.log(`${...str}`);

// real-world spread example

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.restName = 'Ristorante Roma';
console.log(restaurant.restName);
console.log(restaurantCopy.restName);

////////
////////
////////
//////// 107. Rest Pattern and Parameters

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// RESR, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 3, 4, 5, 7, 3, 2, 4);

const x = [23, 5, 7];
add(...x); //(using spread)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

////////
////////
////////
////////

//  Short Circuiting (&& and ||)

// console.log('--------- OR -----------');
// // ||  Use ANY data type, return ANY data type, short-circuiting
// //returns the first truthy value
// console.log(3 || 'Jonas'); // returns 3
// console.log('' || 'JOnas'); // returns jonas
// console.log(true || 0); //returns true
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello, because hello is the first truthy value

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// /////////
// console.log('--------- AND -----------');
// //if it is truthy, the last evaluation value is returned

// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); //Jonas
// console.log('Hello' && 23 && null && 'Jonas'); //null

// //Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //  The Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish values: null and undefined (NOT 0 or '');
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Logical Assignment Operators

const rest1 = {
  restName: 'Carpi',
  // numGuests: 23,
  numGuests: 0,
};

const rest2 = {
  restName: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest2.numGuests = rest2.numGuests || 10; //it works because it returns the first truthy value, so if the first one is false, it continues checking and returns 10;

// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
//because of short circuiting, returns the first falsy falue. or if both are truthy, it returns the last truthy
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

//Coding Challenge #1

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// const players1 = game.players[0];
// console.log(players1);
// const players2 = game.players[1];
// console.log(players2);

//Jonas solution
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
// const gk = players1[0];
// console.log(gk);
// const fieldPlayers = players1.slice(1);
// console.log(fieldPlayers);

//Jonas solution
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Jonas solution
//same

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//Jonas solution
//same

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2');
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

//Jonas solution
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...playerNames) {
  console.log(
    `The goals were made by ${playerNames} and total score is ${playerNames.length}`
  );
};

printGoals('levan', 'mari', 'nika');

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 1 is more likely to win`);
