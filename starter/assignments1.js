'use strict';
// const country = 'Georgia';
// const continent = 'Eurasia';
// const population = '3 million';
// console.log(country, continent, population);

// const isIsland = false;
// let language;
// console.log(
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof language
// );

// language = 'Georgian';

// console.log('9' - '5'); //4
// console.log('19' - '13' + '17'); //617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// 1. Write a function that takes the base and height of a triangle and return its area.

// const returnArea = function (base, height) {
//   const result = (base * height) / 2;
//   return result;
// };

// console.log(returnArea(3, 2));
// console.log(returnArea(7, 4));
// console.log(returnArea(10, 10));

// 2. Write a function to reverse an array.

// const reverseArray = function (arr) {
//   let reversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// };

// console.log(reverseArray([1, 2, 3, 4]));
// console.log(reverseArray([9, 9, 2, 3, 4]));
// console.log(reverseArray([]));

// 3. Given an index and an array, return the value of the array with the given index.

// const valueAt = function (arr, ind) {
//   const value = arr[Math.floor(ind)];
//   return value;
// };

// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));

// 4. Create a function that takes an array and returns the types of values (data types) in a new array.

// const arrayValuesTypes = function (arr) {
//   let typesArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let type = typeof arr[i];
//     typesArr.push(type);
//   }
//   return typesArr;
// };

// console.log(arrayValuesTypes([1, 2, 'null', []]));
// console.log(arrayValuesTypes(['214', true, false, 2, 2.15, [], null]));
// console.log(
//   arrayValuesTypes([21.1, 'float', 'array', ['I am array'], null, true, 214])
// );

// // 5.
// const array = [
//   [5, 10, 20],
//   [3, 50, 17],
//   [0, 18, -10],
// ];

// // მარცხენა დიაგონალი 5, 50, -10
// // მარჯვენა დიაგონალი 20, 50, 0
// // დათვალეთ დიაგონალების ჯამი და ჩაწერეთ ცვლადში
// let sumOfDiagonals;
// let sumLeft = 0;
// let sumRight = 0;

// const getDiagonalsArray = function (array) {
//   const leftDiagonalArray = [];
//   const rightDiagonalArray = [];
//   // return left diagonal
//   for (let i = 0; i < array.length; i++) {
//     leftDiagonalArray.push(array[i][i]);
//     rightDiagonalArray.push(array[i][array.length - 1 - i]);
//   }

//   for (
//     let i = 0, j = 0;
//     (i < leftDiagonalArray.length) & (j < rightDiagonalArray.length);
//     i++, j++
//   ) {
//     sumLeft += leftDiagonalArray[i];
//     sumRight += rightDiagonalArray[j];
//   }
//   // console.log(sumLeft);
//   // console.log(sumRight);
//   sumOfDiagonals = sumLeft + sumRight;

//   // console.log(leftDiagonalArray);
//   // console.log(rightDiagonalArray);
//   console.log(sumOfDiagonals);
//   return sumOfDiagonals;
// };

// getDiagonalsArray(array);

// 6. შექმენით ფუნქცია რომელსაც გადაეცემა არაი და აბრუნებს არაიში არსებული რიცხვების ჯამს გაითვალისწინეთ რომ არაიში შეიძლება იყოს სტრინგ ტაიპები მაგალითად [1, ‘სალამი’, 2, 44, ‘გამარჯობა’]

// let sum = 0;
// const sumOfNumbers = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//       sum += array[i];
//     }
//   }
//   return sum;
// };

// console.log(sumOfNumbers([1, 'სალამი', 2, 44, 'გამარჯობა']));

// 7. შექმენით ფუნქცია რომელიც რომელიც მიიღებს ორ პარამეტრს არაის და n ს და დააბრუნებს ახალ არაის რომელიც შედგებნა n is jeradi ricxvebisgan magalitad

// const arr = [1, 2, 5, 8, 15, 20];
// const arr1 = [9, 12, 45, 23, 17, 11, 4, 6, 20];
// const arr2 = [7, 8, 21, 22, 14];

// //function fun(arr, 5) // expected outcome [5, 16, 20]
// const newArray = [];
// const returnNewArray = function (array, n) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % n === 0) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// };

// console.log(returnNewArray(arr, 5));
// console.log(returnNewArray(arr1, 3));
// console.log(returnNewArray(arr2, 7));

//  8. Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

/* Examples
spelling("bee") ➞ ["b", "be", "bee"]

spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"] */

// const wordProcess = [];
// const spellingFunction = function (string) {
//   const letters = string.split('');
//   let step = '';
//   console.log(letters);
//   for (let i = 0; i < letters.length; i++) {
//     step += letters[i];
//     console.log(step);
//     wordProcess.push(step);
//   }
//   return wordProcess;
// };

// console.log(spellingFunction('happy'));
// console.log(spellingFunction('eagerly'));

// 9. შექმენით ფუნქცია რომელსაც გადაეცემა მსგავსი ობიექტი და აბრუნებს მენტორთა სახელისა და გვარებისაგან შემდგარ არაის // expected output [‘გიორგი ბერიძე’, ‘ნინო გვაზავა’, ‘მარია კვირიკაშვილი’,  ‘იაკობი გელიძე’]

const mentorsNames = function (object) {};

const mentors = [
  {
    id: 101,
    firstName: 'გიორგი',
    lastName: 'ბერიძე',
    course: 'მათემატიკა',
    students: [
      {
        id: 20,
        firstName: 'ზურა',
        lastName: 'გელაშვილი',
        allScores: [5, 4, 2, 8, 7, 9],
      },
      {
        id: 21,
        firstName: 'მარიკა',
        lastName: 'თორია',
        allScores: [9, 8, 7, 6, 10],
      },
      {
        id: 22,
        firstName: 'ნიკა',
        lastName: 'ლაშხი',
        allScores: [6, 9, 8],
      },
      {
        id: 23,
        firstName: 'თამარი',
        lastName: 'ფიფია',
        allScores: [8, 7, 6, 5, 9, 10, 2],
      },
      {
        id: 24,
        firstName: 'გიორგი',
        lastName: 'ლაშქარი',
        allScores: [3, 4, 5, 6, 2, 7, 8, 9],
      },
    ],
  },
  {
    id: 202,
    firstName: 'ნინო',
    lastName: 'გვაზავა',
    course: 'ფიზიკა',
    students: [
      {
        id: 25,
        firstName: 'ეკა',
        lastName: 'ფრანგული',
        allScores: [2, 7, 9, 8, 5, 4],
      },
      {
        id: 26,
        firstName: 'დავითი',
        lastName: 'ხარაზიშვილი',
        allScores: [8, 5, 7, 6, 2, 9],
      },
      {
        id: 27,
        firstName: 'სალომე',
        lastName: 'ფატალი',
        allScores: [4, 5, 6, 7, 8],
      },
      {
        id: 28,
        firstName: 'ლევანი',
        lastName: 'ბეგიაშვილი',
        allScores: [6, 7, 9, 2, 1, 3, 5, 4],
      },
    ],
  },
  {
    id: 303,
    firstName: 'მარია',
    lastName: 'კვირიკაშვილი',
    course: 'ბიზნესის მართვა',
    students: [
      {
        id: 29,
        firstName: 'ლელა',
        lastName: 'ტაბატაძე',
        allScores: [8, 9, 7, 5, 4],
      },
      {
        id: 30,
        firstName: 'ნიკოლოზი',
        lastName: 'ბუბუბუ',
        allScores: [5, 6, 7, 8, 9, 10],
      },
      {
        id: 31,
        firstName: 'ირინე',
        lastName: 'მენაბდე',
        allScores: [9, 8, 7, 6, 5],
      },
      {
        id: 32,
        firstName: 'მარიამი',
        lastName: 'გიორგიშვილი',
        allScores: [2, 3, 4, 5, 1],
      },
      {
        id: 33,
        firstName: 'გიორგი',
        lastName: 'მარიანი',
        allScores: [5, 4, 3, 2, 1],
      },
    ],
  },
  {
    id: 404,
    firstName: 'იაკობი',
    lastName: 'გელაძე',
    course: 'საუბარის კლუბი',
    students: [
      {
        id: 34,
        firstName: 'სოფია',
        lastName: 'მიქავა',
        allScores: [7, 6, 8, 5, 4],
      },
      {
        id: 35,
        firstName: 'დათა',
        lastName: 'გიორგაძე',
        allScores: [5, 6, 7, 8],
      },
      {
        id: 36,
        firstName: 'მარიკო',
        lastName: 'თევზაძე',
        allScores: [7, 8, 9, 6, 5, 4, 3],
      },
      {
        id: 37,
        firstName: 'ელენე',
        lastName: 'ბერულავა',
        allScores: [2, 7, 5, 9, 8],
      },
      {
        id: 38,
        firstName: 'მამუკა',
        lastName: 'ტყემალაძე',
        allScores: [8, 7, 6, 5, 4],
      },
    ],
  },
];

// 10. შექმენით ფუნქცია რომელიც მიიღებს მსგვს ობიექტს  და აბრუნებს არაის სადაც თითო მენტორის ყველა სტუდენტის ქულათა ჯამები იქნება ანუ ამ შემთხვევაში 4 ელემენტიანი არაი უნდა დააბრუნოს
