'use strict';

// functions - dont need access modifiers or a return type in JS

function sum(a,b) {
  //  debugger // you can stick the debugger --> stops code execution at this line if the dev console is open
    return a + b;
}

function multiply(a,b) {
    return a * b;  
}

function scoped(){
    var myVar = 12; // this var exists here, in this function. Can only access inside the function. 
}       // better to just avoid it

//var bloop; implied global variable
// thinks you were trying to do -- var bloop;
function butTheImplication(){
   bloop = "hello";
}

function byMyOwnPetard(){
   // var innocentVar; // hoisted
    innocentVar = 27; // should error here as variable has not been declared yet
    var innocentVar;
    console.log(innocentVar); // but this prints 27, not undefined as you would expect
}
//  This is because it does:
// var innocentVar; then hoists variable declarations to the top of the function.
// only var can be hoisted, not let or const
// JS scans the whole thing and moves any variable declerations to the top. 
// can be turned off using the 'use strict'; keyphrase. 

// Don't use vars and use strict mode!

