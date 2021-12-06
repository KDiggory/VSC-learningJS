////////// DOM MANIPULATION //////////
// Tree representation of all the elements in the document (page).
// DOM = Document Object Model
// starts with html, then head, title body, then h1 etc etc

// DOM manipulation is altering what is on the page using JS. 
// Relatively easy... 
// In JS document is an object that represents the webpage. 
'use strict';

// document is a word used in JS for the page -- DO NOT call a variable document
// you can use document to modify the page though!

// createElement(tag); // creates an element with the tag you have specified - will be blank
// // document.createElement('h1'); // returns <h1></h1>

// querySelector(selector); // returns the first element it finds with the defined selector
// // document.querySelector('body'); // returns <body></body>

// appendChild(element); // adds the new element into the selected element


// const body = document.querySelector('body');
// undefined
// const heading = document.createElement('h1');
// // undefined
// body.appendChild(heading);
// // <h1>​</h1>​
// heading.innerText = "Hello!!";
// 'Hello!!' // then hello pops up on the page.

// There are lots of options to use but these are the three main you will need to use!!

/// QAC exercises ///
// 1
// write a function that creates a new h1, adds text and then adds the h1 to the document on load of html.

const arbitraryfunction = () => {
const body = document.querySelector('body');
debugger;
const heading = document.createElement('h1');
body.appendChild(heading);
heading.innerText= 'I am adding text to my webpage! Yay';
};

arbitraryfunction();

// 2




