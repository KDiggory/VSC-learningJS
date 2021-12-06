'use strict';

let now = new Date();
let greeting = "Good";
if (now.getHours() > 17) {
  greeting += " evening.";
} else {
  greeting += " day.";
}
console.log(greeting);

// Ternary if statements
let now2 = new Date();
let greeting2 = "Good" + (now2.getHours() > 17 ? " evening." : " day.");
console.log(greeting2);

// Truthy/Falsey
// In JS you can say if (anything) rather than if (boolean) like in java.
// In JS everything is true apart from false, 0, -0, 0n, "", null, NaN - not a number, undefined
if(27) {
  console.log('Yo');
} else {
  console.log('No');
}

if(true) {
  console.log('Yo');
} else {
  console.log('No');
}
if('Katie') {
  console.log('Yo');
} else {
  console.log('No');
}
///////////////////

if(0) {
  console.log('Yo');
} else {
  console.log('No');
}

if(false) {
  console.log('Yo');
} else {
  console.log('No');
}
if(undefined) {
  console.log('Yo');
} else {
  console.log('No');
}

///// NaN - Not a numnber
if(Number.parseInt('hello')) { // trying to parse from a string to an int, but with something that isnt a number
  console.log('Yo');
} else {
  console.log('No');
}

typeof(NaN);
'number'
// NaN is a number.... because if you use NaN in a calculation the result is always a number
// so it doesn't try and concatenate like a string.
// you can treat it like a number so your calculations don't fall over

// turning that into a function that checks if its null first.
// This will only come back with a value if its not null or undefined!
// caveat - parameters in JS are more optional than in Java. 
// if you write a function that takes 2 parameters, you dont have to put 2 in, you can put in as many or few as you want
function truthyFalsey(var1) {
  if(var1 == null || var1 ==undefined) {
    return 'Invalid value';
  } else if (var1){
      console.log('Yo');
    } else {
      console.log('No');
    }
  }
