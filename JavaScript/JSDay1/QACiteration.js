'use strict';
// enhanced for loop!
// in iterates through the keys
// of iterates through the values!
const nums = [1,2,3,4,5,6,7,8,9,10];
for( let num of nums) {
    console.log('this is the of ' + num); // goes up to 10
}
for( let num in nums) {
    console.log('this is the in ' + num); // goes up to 9
}


// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While loop
let puppies =0;
let notEnoughPups = true;

while(notEnoughPups) {
    console.log("Another cute pup");
    puppies++;
    if (puppies > 238) {
        notEnoughPups = false;
    }
}
console.log("So many puppies");

// Do while loop - this will always run at least once --> because condition is checked after the do statement. 
let x = 0;
let canIRun = false;
do {
    x++;
    console.log(x);
    } while (canIRun);

//  Switch statements
// let num = 5;
// switch (num) {
//     case 4:
//         console.log(`value is 4`);
//         break;
//     case 5:
//         console.log(`value is 5`);
//         break;
//     case 6:
//         console.log(`Well... it will never get to here`);
//         break;
//     default:
//         console.log(`sorry, I can't find that`)
// }

// Exercises

// Exercise 1
// let a = 100;
// let bool = false;
// while(bool == false) {
//     console.log('Still working');
// if (a > 200) {
//     bool = true;
//     console.log('The End')
// }
// if (a <= 200) {
//     console.log(`a = ${a}`);
//     a++;
// }}

// Exercise 2 - with while loop
// let b = 100;
// while(b<=200) {
// if (b%2==0){
//     console.log('*');
//     b++;
// } if ( b%2!=0) {
//     console.log('-');
//     b++;
// }
// }

// Exercise 2 - with for loop

// for (let b = 100; b<=200; b++) {

// if (b%2==0){
//     console.log('*');
//     b++;
// } if ( b%2!=0) {
//     console.log('-');
//     b++;
// }
// }


// Exercise 3/4 - can be done with a for or while loop
// let c = 0;
// for (let c = 0; c <= 10; c++) {
// //while (c <= 10) {
//     for (let i = 0; i <= 10; i++) {
//         console.log(i);
        
//     } //c++;
// }

// exercise 5

let today = 'tuesday';
switch (today) {
    case 'monday':
        console.log(`today is monday`);
        break;
    case 'tuesday':
        console.log(`today is tuesday`);
        break;
    case 'wednesday':
        console.log(`today is wednesday`);
        break;
    case 'thursday':
        console.log(`today is thursday`);
        break;
    case 'friday':
        console.log(`today is friday`);
        break;
    case 'saturday':
        console.log(`today is saturday`);
        break;
    case 'sunday':
        console.log(`today is sunday`);
        break;
    default:
        console.log(`sorry, I can't find that`)
}
// different on community - i understood it wrong
let now = new Date(); 
let day = now.getDay();
switch (day) {
    case 0:
      console.log(`It's Sunday`);
      break;
    case 6:
      console.log(`It's Saturday`);
      break;
    case 1:
      console.log(`It's Monday`);
    case 2:
        // console.log(`It's Tuesday`);
    case 3:
        // console.log(`It's Wednesday`);
    case 4:
        // console.log(`It's Thursday`);
    case 5:
      console.log(`It's a weekday`);
      break;
    default:
      console.log(`Excuse me?`);
      break;
  }

