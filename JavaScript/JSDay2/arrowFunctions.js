'use strict'; // this disables implied globals

// functions are function scoped and so hoiseted, functions set as a const are scoped to { } so are not hoisted.
// better to use non hoisted!

// this one would be hoisted
function divide(num1, num2){
    return num1/num2;
}

let x = divide(10,2);

console.log(x);

// let welcome = function(){
//     alert('Hello');
// }

// this one wouldn't be
const rectArea = function(height, width){
    return height * width;
}

// Arrow functions
const hello = () => {
     return "Hello World!";
 } // this doesn't seem to work? -> it didnt have the const in front

const hello2 = (personName) => 'Hello ' + personName;

// Exercises
// 1
// Create a function that takes 2 parameters and subtracts them.
// as an arrow function
const sub = (one, two) => one-two;
// as a regular function
function subReg(one, two) {
    return one - two;
}

// 2
// Create a function expression that takes in name age sex as parameters, make the output a concatenated string
function welcome(name, age, sex) {
    return `My name is ${name}, I am ${age} years old and I am a ${sex}.`
}

// 3
// create an arrow function that takes two values and will return the power of the two numbers
const powerUp = (n1,n2) => Math.pow(n1,n2);


