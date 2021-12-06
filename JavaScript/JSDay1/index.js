const textEle = document.getElementById("text");

const x = 12;
{
    const y = 27;
}
console.log("Sum: ", x + y); 
// if you put this into the console it wont be happy, because the const y is not accessible to the console.log() because it is in a different scope!
// by default VS code can't pick up problems with JS the way eclipse does with Java :( There are tools to help but they can be a hassle to use so should get used to checking it in the console.

const a = 12;
{
    var b = 27;         // If this is a var it works as it doesnt follow the rules on scope. But don't use them
}
console.log("Sum: ", a + b); 

