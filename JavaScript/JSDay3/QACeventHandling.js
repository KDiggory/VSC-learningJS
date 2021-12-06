'use strict';

///// QAC exercises /////
// create multiple event listeners that
// changes first paragraph colour to blue
let button = document.querySelector("button#textColour").addEventListener("click", blueToRed);
// setting the button as an event listener

const blueParagraph = document.querySelector("#blueText");
// selecting what to change when the event listener is activated - based on the id

// the function to do the change
function blueToRed() {
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
}

//changes second paragraph background green to pink
document.querySelector("button#bgColour").addEventListener("click", greenToPink);

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
  for (let greenParagraph of greenParagraphs) {
    greenParagraph.className = "hotpinkBg";
    greenParagraph.textContent = greenParagraph.textContent.replace("green","hotpink");
  }
}

// change the font style

document.querySelector("button#fonts").addEventListener("click", changeFont);

const textToChange = document.querySelector("#tnrParagraph");

function changeFont(){
    textToChange.style.fontFamily  = "Arial";
    textToChange.textContent = textToChange.textContent.replate("Times New Roman", "Arial");
}
