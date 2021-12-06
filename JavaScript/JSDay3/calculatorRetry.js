'use strict';

const buttons = document.querySelectorAll(".button");
const operatorButtons = document.querySelectorAll(".operatorButton");
const output = document.querySelector("div#history");
let saved;
let op;

buttons.forEach(btn => {
 btn.addEventListener('click', event => {
        addNumbers(event);
   });
});

operatorButtons.forEach(btn => {
 btn.addEventListener('click', event => {
        operations(event);
   });
});

function addNumbers(event) {
    const current = counter.value;
    const newValue = current + event.target.innerText ;
    counter.value = (newValue);  
}

function operations(event) {
    if (event.target.innerText ==="clear") {
        counter.value = null;
    } else if ( event.target.innerText === "="){
        const current = counter.value;
        counter.value = null;
    evaluate(op, current, saved);
    }else {
    const current = counter.value;
    counter.value = null;
    op = event.target.innerText ;
    saved = current;
    addHistory(`${current} ${op} `)
    }
}

function evaluate(op, current, saved) { 
        switch(op) {
            case "+":
                counter.value = Number.parseInt(saved) + Number.parseInt(current);
                break;
            case "-":
                counter.value = Number.parseInt(saved) - Number.parseInt(current);
                break;
            case "*":
                counter.value = Number.parseInt(saved) * Number.parseInt(current);
                break;
            case "/":
                counter.value = Number.parseInt(saved) / Number.parseInt(current);
                break;
        }
       const total = counter.value;
    addHistory(`${current} = ${total}`);
    counter.value = null;
    }

const addHistory = (value) => {
    const newHistory = document.createElement("p");
    newHistory.innerText = `${value}`;
    output.appendChild(newHistory);
}
