///// EVENT HANDLING /////
// what is evet hadnling?
// Event handling is when you click, scroll, type, hover -> and things happen!
// essentially iunteracting with a website and it responding.

// we can write functions that trigger when certain events happen!
'use strict';

const handleClick = () => alert("Hello again!!");


// These are event handler - use the html side as well as JS

const convertKmToMiles = () => { //km / 1.609; // this converts km to miles
const kmInput = document.querySelector('input#kms'); // saying you want to get the input
const km = kmInput.value; // this is how you get the value of an input
const miles = km / 1.609; // the formula for km to miles
console.log(miles);

const milesInput = document.querySelector("input#miles");
milesInput.value = miles;
}

// the other way round
const convertMilesToKm = () => { //km / 1.609; // this converts km to miles
    const milesInput = document.querySelector('input#miles'); // saying you want to get the input
    const miles = milesInput.value; // this is how you get the value of an input
    const km = miles * 1.609; // the formula for km to miles
    console.log(km);
    
    const kmInput = document.querySelector("input#kms");
    kmInput.value = km;
    }


    // A better way to do this is using event listeners
    // Event listeners are entirely on JS side
    // accomplishes the same as before but is smaller
    // will see this more often
// more complex so ok to use event handlers first and then learn to refactor
    milesInput.addEventListener("input", function(event) {
        console.log("EVENT: ", event ) // this tells you each time an event is called - useful for capturing the event in the function! -> can be used to checkl what the target is
       // const miles = event.target.value; // this is what you could use the event target for!
        const miles = milesInput.value;
        const km = miles * 1.609;
        kmInput.value = km;
    });

    // adding to a history example
    const heading = document.createElement("h1");
    heading.innerText= "DOM Manipulation";
    document.querySelector("body").appendChild(heading);

    const para = document.createElement("p");
    heading.innerText= "last number";
    document.querySelector("body").appendChild(para);


