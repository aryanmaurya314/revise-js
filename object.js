// object Method
// key =>> always string
// value =>> any: string, number, array, object
let obj = {
  name: 'Aryan',
  age: 22,
  isDeveloper: true,
};

// add
obj.location = 'Banglore';
obj['location'] = 'Banglore';
obj['current location'] = 'Madivala';

// {
// name: 'Aryan',
// age: 22,
// isDeveloper: true,
// location: 'Banglore',
// 'current location': 'Madivala'
// }

// object destructuring

// rest operator
const { name, age, ...rest } = obj;

// console.log(name, age, rest);

// spread operator
const obj2 = {
  name: 'Jitendra',
  age: 99,
  ...rest,
};

// console.log(obj2);

// keys
const keys = Object.keys(obj2);
// values
const values = Object.values(obj2);

for (let key in obj) {
  // console.log(key + ' -->> ' + obj[key]);
}

// console.log(keys);

// length of object
// console.log(Object.keys(obj).length === 0);

//
// console.log(obj.country); // undefined

// array destrucring
const arr = [2, 5, 7, 8];
const [x, y, ...t] = arr;

const arr2 = [11, 12, 31, ...t];
// console.log(arr2);

// shallow --> reference to original
// deep --> new object created

let a = 4;
let b = a;
b = b + 7;
console.log(a, b) // deep copy --> copy by value

// const obj4 = obj; // shallow copy ---> copy by reference
const obj4 = {...obj} // deep copy --> copy by value
obj4.country = 'India';
console.log(obj, obj4);
