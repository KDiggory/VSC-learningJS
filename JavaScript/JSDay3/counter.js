"use strict";


const output = document.querySelector("div#history");
const counter = document.querySelector("input#counter");

//could put the history into a function
const addHistory = (current, change, newValue) => {
    if (change ===0) {
        newHistory.innerText = 0;
    } else {
    const newHistory = document.createElement("p");
    newHistory.innerText = `${current}, ${change} = ${newValue}`;
    output.appendChild(newHistory);
}
}


// could have as just 2 functions - update and reset
function updateCounter(change){
    const current = counter.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) + change ;

    console.log("new: ", newValue);
    counter.value = newValue;

    addHistory(current, change, newValue);
}



function minusOne(){
    const current = counter.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) -1 ;

    console.log("new: ", newValue);
    counter.value = newValue;

    addHistory(current, -1, newValue);
    // const newHistory = document.createElement("p");
    // newHistory.innerText = newValue;
    // output.appendChild(newHistory); 
}

function minusFive(){
    const current = counter.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) -5 ;

    console.log("new: ", newValue);
    counter.value = newValue;

    addHistory(current, -5, newValue);
//     const newHistory = document.createElement("p");
//     newHistory.innerText = newValue;
//     output.appendChild(newHistory); 
 }

function reset(){
    const current = counter.value;
    console.log("curr:", current);
    const newValue = 0 ;

    console.log("new: ", newValue);
    counter.value = newValue;

    addHistory(current, 0, newValue);
    // const newHistory = document.createElement("p");
    // newHistory.innerText = newValue;
    // output.appendChild(newHistory); 
}

function plusOne(){
    const current = counter.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) +1 ;

    console.log("new: ", newValue);
    counter.value = newValue;
    addHistory(current, +1, newValue);
    // const newHistory = document.createElement("p");
    // newHistory.innerText = newValue;
    // output.appendChild(newHistory); 
}

function plusFive(){
    const current = counter.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) +5 ;

    console.log("new: ", newValue);
    counter.value = newValue;

    addHistory(current, +5, newValue);
    // const newHistory = document.createElement("p");
    // newHistory.innerText = newValue;
    // output.appendChild(newHistory); 
}


const output2 = document.querySelector("div#history2");
const counter2 = document.querySelector("input#counter2");

function maths(event){
const id = event.target.id;
console.log(id);
    if (id === "minusOne2") {
    const current = counter2.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) -1 ;

    console.log("new: ", newValue);
    counter2.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = newValue;
    output2.appendChild(newHistory); 
} else if (id === "minusFive2") {
    const current = counter2.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) -5 ;
    
    console.log("new: ", newValue);
    counter2.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = newValue;
    output2.appendChild(newHistory); 
} else if (id === "reset2") {
    const current = counter2.value;
    console.log("curr:", current);
    const newValue = 0;

    console.log("new: ", newValue);
    counter2.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = newValue;
    output2.appendChild(newHistory); 
}else if (id === "plusOne2") {
    const current = counter2.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) +1 ;

    console.log("new: ", newValue);
    counter2.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = newValue;
    output2.appendChild(newHistory); 
}else if (id === "plusFive2") {
    const current = counter2.value;
    console.log("curr:", current);
    const newValue = Number.parseInt(current) +5 ;

    console.log("new: ", newValue);
    counter2.value = newValue;

    const newHistory = document.createElement("p");
    newHistory.innerText = newValue;
    output2.appendChild(newHistory); 
} else {

}
}
