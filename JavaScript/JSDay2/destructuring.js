'use strict';
// Destructuring

const me = {
    name: 'Katie',
    age:34,
    job:'mum'
}

// const name = me.name;
// const age = me.age;
// const job = me.job;

// all this can be replaced with

const {name,age, job} = me;

const print = ({name, age, job}) => console.log(`Name: ${name}, age: ${age}, job: ${job}`);

print(me); // prints Name: Katie, age: 34, job: mum

// use rest to show the rest of things as well
me.likes = 'lasagne';
me.pets = 'dogs'

const print2 = ({name, age, job, ...rest}) => {
    console.log('Rest:', rest);
    console.log(`Name: ${name}, age: ${age}, job: ${job}`);
}

const print3 = ({name='defaultName', age='defaultAge', job='defaultJob', ...rest}) => {
    console.log('Rest:', rest);
    console.log(`Name: ${name}, age: ${age}, job: ${job}`);
}

// called like this
print3({});

//returns this
// Name: defaultName, age: defaultAge, job: defaultJob

// Can also destructure arrays - as they are essentially indexed objects

const arr = [me, 123, 'abc'];

const[a,b,c] = arr; 
//then each of these variables is set to that value of the Array.
// would probably only destructure the first few values in an array, after that would probably use splice

const [first, , third] = arr;
// can also use this to get specific values based on location. 

const nums = [1,2,3,4,5];


// Spread operator

const newArr = [...nums, ...arr];
// this is the spread operator. It can mash arrays together


// defining and redefining values
let red = 100;
let green = 200;
let blue = 50;
const rgb = [200, 255, 100];
[red, green] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);
//output: R: 200, G: 255, B: 50 // because red gets reset as 200, and green as 255, but blue is not reset. 

// Nested destructuring!
const student = {
    person: 'Katie',
    age: 34,
    scores: {maths: 65, english: 73}
};
const {person, scores: {maths, science = 95}} = student;

console.log(`${person} scored ${maths} in maths and  ${science} in science.`)

// Nested Array destructuring

const colour = ['#FF00FF', [255,0,255], 'rgb(255,0,255'];
// use nested destructuring to assign red green and blue
const [hex, [red2, green2, blue2]] = colour;
console.log(hex, red2, green2, blue2);


// Swapping values --> this is pretty cool
let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`);

if (landscape) {
    // an extra variable is needed to copy initial width to
    let initialWidth = width;
    //swap the variables
    width = height;
    // assign height with the saved variable
    height = initialWidth;
    console.log(`${width} x ${height}`)
}

// using single assignment makes it less lines of code! Plus don't have to save the initial width in a variable!
let w = 300;
let h = 400;
const ls = true;

console.log(`${w} x ${h}`);
//output :300 x 400
if (landscape) {
    // Swap the variables
    [w, h] = [h, w];
    console.log(`${w} x ${h}`);
    //output: 400 x 300
}

// using different variable names
const anotherPerson = {
    name: 'Issac Mewton',
    country: 'UK'
};
// assign default calue of 25 years if age is undefined
const {name: fullName, country: place, age: years = 25 } = anotherPerson;

// ES6 template literals
console.log(`I am ${fullName} from ${place} and I am ${years} years old`);

// process of extracting values from objects (or arrays)

/////////////////////// EXERCISES ///////////////////////

// One
// with the object write the destructuring assignment that reads name years and isAdmin into properties with isAdmin default as false. 

// let user = {
//     name: "John",
//     years: 30
//     };

//  const {name: name2, years: age2, isAdmin = false } = user;   

//  console.log(name2);
//  console.log(age2);
//  console.log(isAdmin);

 let user2 = {
     name: 'Katie',
     years: 34,
     isAdmin: true
 };

 const {name: name3, years: age3, isAdmin = true } = user2;   

 console.log(name3);
 console.log(age3);
 console.log(isAdmin);


 /// Next day go over

 const me = { name, age, job};
 const { name, age, job} = me;
 const {name = "KD", age, job}; // to set defaults
 const {name, ...rest} = me; // to get the first value separately and then the rest
 const nums = [1,'b', true];
 const[a,b,c] = nums; // makes a =1, b = b, c = true

 // this is useful but even more useful in function parameters
 function print(person) {
     console.log(`Hello, my name is ${person.name} and I am ${person.age} years old!`) // this could be destructured so name and age are already available to us
 }


 function print ({name, age}) {
    console.log(`Hello, my name is ${name} and I am ${age} years old!`) 
 }

 // even if you object has more variables than you call they just get ignored
 // could use ...rest if you did want to see them

 function print ({name, age, ...rest}) {
    console.log(`Hello, my name is ${name} and I am ${age} years old!`) 
    console.log('Ignored:', rest);
 }
