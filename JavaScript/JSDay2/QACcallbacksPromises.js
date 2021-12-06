'use strict';

// promise - placeholder for some data that will be available, straight away, in the future or never.

// promises can be in 3 states - pending, success or failed.

let newPromise = new Promise((resolve, reject)=> {
    let a = 1+0;
    if(a==2){
        resolve('success');
    } else {
        reject('FAILURE!!');
    }
})

newPromise.then((message)=> {
    console.log(`This is in the then block and the status is ${message}`);
}).catch((message)=> {
    console.log(`This is in the catch block and the status is ${message}`);
}).then(()=> {
    console.log('I will take place regardless of what happened before.')
});

// callbacks //

const greeting = (name) => {
    alert(`Hello ${name}`);
}
const processUserInput = (callback) => {
    let name = prompt('Please enter your name.');
    callback(name);
}
processUserInput(greeting);

///// Exercises /////
// create a callback function that asks for a user to enter a value then increase that value by 10 through another function.

const increase = (number) => {
    alert(`The new number is: ${number +10}`);
}
const processInput = (callback) => {
    let number = parseInt(prompt('Please enter a number!'));
    callback(number);
}
processInput(increase);


/// next day go over
// promises wrap around a process that may or may not succeed.
// will be used for front end talking to back end quite a lot

new promise ((resolve, reject) => {
    if(success) {
        resolve(); 
     } else { reject();
     }
}); then(onSuccess).catch(onFailure)