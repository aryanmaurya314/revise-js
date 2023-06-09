/**
# JavaScript has 8 Datatypes
  1. String
  2. Number
  3. Boolean
  4. Undefined
  5. Null
  6. Object

  7. Symbol
  8. Bigint

# The Object Datatype
  1. An object
  2. An array
  3. A date
 */

// 1. String
let str = 'test';
str = 'test';
// str = "aryan's";
// console.log(typeof str)
// # String methods
// 1. concat
let fName = 'Aryan';
let lName = 'Maurya';
// console.log(fName + ' ' + lName);
let age = 22;
let desc =
  'My name is ' + fName + ' ' + lName + '. ' + 'My age is ' + age + '.';
// string literals
desc = `My name is ${fName} ${lName}. 
My age is ${age}, after two years my age will be ${age + 2}`;
// console.log(desc);

// str = fName.concat(lName);

// 2. length
let len = str.length;
// console.log(len);

// -->
str = 'My name is Aryan Maurya';
// 3. indexOf()
// console.log(str.indexOf('name'));

// 4. lastIndexOf()
// console.log(str.lastIndexOf('t'));

// 5. includes() --> true/false
// console.log(str.includes("aryan"))

// 6. split()
// console.log(str.split("is"))

// 7. join()
// let splitStr = str.split(" ")
// console.log(splitStr)
// console.log(splitStr.join("-"))

// console.log(str.split(" ").join("-"))

// 8. slice()
// console.log(str.slice(11, 16))
// console.log(str.slice(11))
// console.log(str.slice(-6))

// 9. subString()
// console.log(str.substring(11, 16))
// console.log(str.substring(11))
// console.log(str.substring(-6))  // -ve value doesn't throw error but return whole

// 10. charAt
// console.log(str.charAt(6))

// 11. replace() / replaceAll()
// console.log(str.replace("Aryan", "Jitendra")) // --> returns string with updated value but doesn't change original called "String is immutable"
// console.log(str)

// 12. trim() / trimStart() / trimEnd()
// console.log(str.trim())

// #  2. Number

let num = '67';

// console.log('6' + 6 - 8); // concat output will be 58 and is number
// console.log(6 * 8 + '6'); // concat output will be string
// console.log('16' - 6); // do arithmatic for (-, *, /, %) output will be number
// console.log('a' - 6); // NaN
// console.log(6 % null); // null is treated as 0
// console.log(16 + undefined); // NaN

// # Methods:
// 1. parseInt()
num = '7a6';
num = parseInt(num);

num = '78.67';
num = parseInt(num);
// 2. parseFloat()
num = '78.67';
num = parseFloat(num);
// 3.   Math.floor()
num = 45.99;
// console.log(Math.floor(num));
// 4. Math.ceil()
num = 45.01;
// console.log(Math.ceil(num));
//  5. Math.round()
num = 45.67658;
// console.log(Math.round(num));
// console.log(Math.round(num).toFixed(2));  ***

// properties
num = 67.8;
// console.log(Number.isInteger(num))  // true/false
// console.log(Number.isNaN(num))  // true/false

// console.log("Max: ",Number.MAX_VALUE,"Min: ", Number.MIN_VALUE)

// 3. A date
let date = new Date();
// console.log(date)
const year = date.getFullYear();
const month = date.getMonth();
// Month = [jan-0,1,2,3,4,5,6,7,8,9,10,11];
// week = [sun-0, 1, 2, 3, 4, 5, 6]
// console.log(date.getSeconds())
// date = new Date();
console.log(date.getTime()) //epoc -> number of milliseconds from 1 January 1970
