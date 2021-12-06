'use strict';

// array indexing starts at 0

const arr = [27, 'hello',true, false, 0];

// JS arrays are not fixed length!

console.log(arr[0]);
arr[5] = 'new entry';
console.log(arr[5]);

arr[10] = 'at number 10';
// if you set something at an index that is further than the end then it fills the extra spaces as empty

// Any data type can go into an array, including objects, functions and other arrays!
//JS arrays are just very specific objects

// Lots of array functions
arr.indexOf(27);


