'use strict';

document.querySelector("button#zero").addEventListener("click", calculate);
document.querySelector("button#one").addEventListener("click", calculate);
document.querySelector("button#two").addEventListener("click", calculate);
document.querySelector("button#three").addEventListener("click", calculate);
document.querySelector("button#four").addEventListener("click", calculate);
document.querySelector("button#five").addEventListener("click", calculate);
document.querySelector("button#six").addEventListener("click", calculate);
document.querySelector("button#seven").addEventListener("click", calculate);
document.querySelector("button#eight").addEventListener("click", calculate);
document.querySelector("button#nine").addEventListener("click", calculate);
document.querySelector("button#plus").addEventListener("click", calculate);
document.querySelector("button#minus").addEventListener("click", calculate);
document.querySelector("button#equals").addEventListener("click", calculate);
document.querySelector("button#clear").addEventListener("click", clear);

//const output = document.querySelector("div#history");
const counter = document.querySelector("input#counter");

// function operator(event) {
//     const op = event.target.innerText;
//     const current = counter.value;
//     console.log("curr:", current);
//     let saved = Number.parseInt(current);
//     console.log(saved);
//     counter.value = null;
//     const output = { saved, plus: true, minus: false};
//     return output;



// }

let output;

function calculate(event){
    const id = event.target.id;
    console.log(id);
    if (id === "zero") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 0 ;

     console.log("new: ", newValue);
        counter.value = newValue;

    } else if (id === "one") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 1 ;

        console.log("new: ", newValue);
        counter.value = newValue;
        
    }else if (id === "two") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 2 ;

        console.log("new: ", newValue);
        counter.value = newValue;
        
    } else if (id === "three") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 3 ;

        console.log("new: ", newValue);
        counter.value = newValue;
       
    }else if (id === "four") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 4 ;

        console.log("new: ", newValue);
        counter.value = newValue;
        
    }else if (id === "five") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 5 ;

        console.log("new: ", newValue);
        counter.value = newValue;
        
    }else if (id === "six") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 6 ;

        console.log("new: ", newValue);
        counter.value = newValue;
        
    }else if (id === "seven") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 7 ;

        console.log("new: ", newValue);
        counter.value = newValue;
        
    } else if (id === "eight") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 8 ;

        console.log("new: ", newValue);
        counter.value = newValue;
    }
    else if (id === "nine") {
        const current = counter.value;
        console.log("curr:", current);
        const newValue = current + 9 ;

        console.log("new: ", newValue);
        counter.value = newValue;
    }
    else if (id === "plus") {
        const current = counter.value;
        console.log("curr:", current);
        let saved = Number.parseInt(current);
        console.log(saved);
        counter.value = null;
         output = { saved, plus: true, minus: false};
        return output;
        // would have to track the number - easy to mess up though
    }
    else if (id === "minus") {
        const current = counter.value;
        console.log("curr:", current);
        let saved = Number.parseInt(current);
        console.log(saved);
        counter.value = null;
          output = {saved, plus: false, minus: true};
         return output;
        
    }
    else if (id === "equals") {
        const current = counter.value;
        let savedNumEqual = Number.parseInt(current);
        console.log(savedNumEqual);
        counter.value = null;
        
        if (output.plus === true && output.minus === false) {
            let total = output.saved + savedNumEqual;
            console.log("equals:", total);
            counter.value = total;
        } else if (output.plus === false && output.minus === true){
            let total = output.saved - savedNumMinus;
            console.log("equals:", total);
            counter.value = total;
        }
    }
    else {
    }
    }

    // could do with an invisible text field - but this is a bad way of fixing it.
    // could also do it using a global variable - like an object 

    function clear(event){
        const id = event.target.id;
    console.log(id);
    const current = counter.value;
        console.log("curr:", current);
        
        console.log("new: ", 0);
        counter.value = null;

    }