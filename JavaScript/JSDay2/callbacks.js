// Callbacks
// A callback function is a function passed into another function as an argument

'use strict';

const callback = () => console.log('Hello'); // a normal function

const func = (myCallback) => {
    console.log('About to call: ', myCallback);
    myCallback();
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
func(callback);
// outputs
// About to call:  () => console.log('Hello')
// Hello
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach(num => console.log(num)); // this is a function being passed to another function
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const cb = num => console.log(num);
arr.forEach(cb);
// the biggest reason to use them is...?

/// Promises
// A promise is a special object that takes in two callbacks -> officially called resolve and reject
// Promises are a bit like optionals in Java - a promise wraps around a function
// promises are used to wrap around a process that may or may not succeed. 
// will make more sense when we start using them

// promise fconstructor takes in 2 functions, resolve an dreject
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const promisesPromises = new Promise((resolve, reject) => {
    const rand = Math.random();
    console.log(rand);

    setTimeout(() => {
    if(rand > 0.5) { 
        resolve('Yay!');
    }else { 
        reject('Sad face :('); // this seems to come out at the bottom after things that are written below
    }
}, 5000 )
// it the process works it is resolved, if it doesnt work then it is rejected.
});

const onSuccess = res => console.log('Success:', res); 
const onFailure = err => console.log('Error:', err);  
promisesPromises.then(onSuccess).catch(onFailure);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

// accumulation

const nums = [1,2,3,4,5,6,7,8,9,10];

const sum = (accumulator, next) => {
    console.log('Accumulation:', accumulator);
    console.log('Next num:', next);
    return accumulator + next;
}

console.log('Total sum: ', nums.reduce(sum));

// this goes through 2 at a time, and adds them together to get a total sum. 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const square = nums => nums ** 2;
// nums.map(square).forEach();


/////////////// Higher order Functions ///////////////
// higher order functions are functions that accepts or returns another function.
//  a bit like streams in Java! Are there terminal higher order functions?
// forEach is a terminating one.

// filter, map, forEach etc are all higher order functions!

// JS doesn't need the stream abstraction as its already a functional language.
// forEach doesn't return any value

/// Next day go over
// Callbacks
// Function passed to another function
const studGrades = [{},{}.dictionary,...];
const isMale = student => student.sex==='M'; // triple equals means strict equality
const males = studGrades.filter(isMale); // this last bit is using the function we have made, isMale --> this is the callback. It is a function given to another function to call later! 
// will see these more and more in event handling and http requests


