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
// 10. splice()

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
    console.log(num);
  }
}

// print odd number -- forEach
mArr.forEach((num) => {
  if (num % 2 !== 0) {
    // console.log(num);
  }
});


// map/reduce/filter