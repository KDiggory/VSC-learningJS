let firstName = 'Katie';
let surname = 'Diggory';
let home = 'Broughton';
let sign = 'Scorpio';
console.log(firstName);
console.log(surname);
console.log(home);
console.log(sign);

let make = 'Landrover';
let model = 'Discovery';
console.log('My favourite car is a', make, model); // either can be used?
console.log('My favourite car is a' + make + 'and the model is ' + model);

// with template literals
console.log(`my fav car is ${make} and the model is ${model}`); // the template literal needs backticks instead of quotes!

// this sets CSS for just that sentence. the %c tells it where to apply the css stuff from. 
console.log("This is now %c the end of the exercise", "color: orange; font-family:fantasy; font-style: Bold; background-color: black; padding: 10px")
