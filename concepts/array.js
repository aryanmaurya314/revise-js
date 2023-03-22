// Array Methods
let arr = [7, 5, 2];
// 1. isArray()
// console.log(Array.isArray(arr)) // true/false

// 2. concat()
// let arr2 = [1, 4, 7, 9];
// let arr3 = arr.concat(arr2);
// console.log('3', arr3);

// arr[2] = 9; // update in original array
// console.log(arr);

// 3. push() --> add to end
// 4. pop()  --> remove from end
// 5. shift()  --> remove from start
// 6. unshift() --> add to start

// arr.shift(678) // no impact of number on implementation
// console.log(arr)
// 7. indexOf()
// 8. lastIndexOf()
// 9. includes()
// 10. slice()

// 11. splice() [7, 5, 2]
arr.splice(2, 0, 'hi', 'bye', 9); // add
arr.splice(3, 1); // remove
// console.log(arr);

// 12. delete [ 7, 5, 'hi', 9, 2 ]
delete arr[2];
// console.log(arr.length);

let mArr = [2, 4, 5, 6, 7];
// print odd number -- for
for (let i = 0; i < mArr.length; i++) {
  const num = mArr[i];

  if (num % 2 !== 0) {
    // console.log(num);
  }
}

// print odd number -- for...of
for (let num of mArr) {
  if (num % 2 !== 0) {
    // console.log(num);
  }
}

// print odd number -- forEach
mArr.forEach((num) => {
  if (num % 2 !== 0) {
    // console.log(num);
  }
});

let arr1 = [3, 2, 5, 4, 8, 6, 7];
// 13. sort()

// arr1.sort(); // sort original array

// 14. reverse()
arr1.reverse();
// console.log(arr1);

// map/reduce/filter

// 1. map()
// let myArr = [2, 3, 4, 5, 6, 9, 11];

// -->> needs a array in which all the elements 2x
// output = [4, 6, 8, 10, 12, 18, 22]

// using
let output = [];
// for (let num of myArr) {
// output.push(num * 2);
// }

// myArr.forEach((num) => {
//   output.push(num * 2);
// });

// output = [2, 6, 12, 20, 30, 54, 77]
// for (let i = 0; i < myArr.length; i++) {
// output.push(myArr[i] * (i + 1));
// }

// 1. map()

function multiplyBy2(num) {
  return 2 * num;
}

let myArr = [2, 3, 4, 5, 6, 9, 11];
output = myArr.map(function multiplyBy2(num) {
  return 2 * num;
});

// console.log(multiplyBy2(6))

console.log('myArr', myArr, 'output', output);
