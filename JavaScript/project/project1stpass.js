"use strict";

const promisesPromises = new Promise((resolve, reject) => {
    const rand = Math.random();

    console.log("Start of promise");
    setTimeout(() => {
        if (rand > 0.5) {
            resolve("Hurrah!");
        } else {
            reject("Sad face!");
        }
    }, 5_000);

    console.log("End of promise");
});

// event listeners for all buttons
const buttons = document.querySelectorAll(".button");
// const output = document.querySelector("div#history");

/// Need to do:
// complete functions
// make functions for submit and reset
// make it so form clears after entry


function highlightForm() {
    for (let docs of document.querySelectorAll("#inputBox")) {
        const highlightGreen = docs;
        highlightGreen.style.background = "rgba(228,170,158,255)";
    }
    const leaveWhite = document.querySelector("#idInput");
    leaveWhite.style.background = "transparent";
}

function highlightIdInput() {
    const selectIdInput = document.querySelector("#idInput");
    selectIdInput.style.background = "rgba(228,170,158,255)";

}

function deselectIdInput() {
    const selectIdInput = document.querySelector("#idInput");
    selectIdInput.style.background = "transparent";

}
function deselectForm() {
    for (let docs of document.querySelectorAll("#inputBox")) {
        const highlightGreen = docs;
        highlightGreen.style.background = "transparent";
    }
}

const create = () => {
    console.log("in the create function");
    highlightForm();
    console.log("what do you want to create")
    document.querySelector("#doingWhat").textContent = "Please enter the details of the plant you want to add to the database";

    // const output = document.createElement("h2");
    // output.classList.add("output-text");
    // output.innerText = "This is some output text";
    // document.querySelector(".outputcontainer").appendChild(output);
}
const read = () => {
    console.log("in the read function");
    deselectForm();
    deselectIdInput()
    document.querySelector("#doingWhat").textContent = "Reading all entries";
}
const readById = () => {
    console.log("in the readById function");
    deselectForm();
    highlightIdInput();
    document.querySelector("#wantToDo").textContent = "Please enter the id of the plant you would like to find";
}
const update = () => {
    console.log("in the update function");
    highlightForm();
    highlightIdInput();
    document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to update and the new details";

}
const deleteById = () => {
    console.log("in the deleteById function");
    deselectForm();
    highlightIdInput();
    document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to delete from the database";

}
const deleteAll = () => {
    console.log("in the deleteAll function");
    deselectForm();
    deselectIdInput();
    document.querySelector("#doingWhat").textContent = "Deleting all entries from the database!! Wouldn't it be good if I knew how to add an 'Are you sure?' option!";
}

const clear = () => {
    console.log("in the clear function");
    deselectForm();
    deselectIdInput();
    document.querySelector("#doingWhat").textContent = "Clearing the history";
    // document.querySelector("output-text").innerText = "";
}


buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.innerText === "create") {
            create();
        } else if (event.target.innerText === "read") {
            read();
        } else if (event.target.innerText === "read by ID") {
            readById();
        } else if (event.target.innerText === "update") {
            update();
        } else if (event.target.innerText === "delete") {
            deleteById();
        } else if (event.target.innerText === "reset this page") {
            clear();
        } else if (event.target.innerText === "delete all entries") {
            deleteAll();
        }
    });
});





