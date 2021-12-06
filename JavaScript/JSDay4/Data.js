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

const onSuccess = res => console.log("Success:", res);
const onFailure = err => console.error("Failure:", err);

promisesPromises.then(onSuccess).catch(onFailure);

// a function to get all data
let userData;
const buttons = document.querySelectorAll(".button");
const output = document.querySelector("section#output");


const getUsers = () => {
    axios
        .get("https://reqres.in/api/users?page=2")
        .then(response => {
            const userData = response.data;
            console.log("Res in get users:", response);
            console.log(userData.data.length); // there are 6 entries in it
            for (let i = 0; i < userData.data.length; i++) {
                const userCard = document.createElement("div");
                userCard.classList.add("card"); // adds the card class to your user div
                const userBody = document.createElement("div");
                userBody.classList.add("card-body");
                const userNameCard = document.createElement("h2");
                userNameCard.classList.add("card-title");
                userNameCard.innerText = `${userData.data[i].first_name} ${userData.data[i].last_name}`
                output.appendChild(userNameCard);

                const userName = document.createElement("p");
                userName.classList.add("card-text");
                userName.innerText = `User: ${userData.data[i].first_name} ${userData.data[i].last_name}`;
                output.appendChild(userName);

                const userEmail = document.createElement("p")
                userEmail.innerText = `Email:  ${userData.data[i].email}`;
                output.appendChild(userEmail);

                const UserId = document.createElement("p");
                UserId.innerText = `User id: ${userData.data[i].id}`
                output.appendChild(UserId);

                const img = document.createElement("img");
                img.src = `${userData.data[i].avatar}`
                output.appendChild(img);
            }
        })
        .catch(err => console.error(err))
}

const getUserById7 = () => { // make this any id later
    console.log("In get user by id 7");
    axios
        .get("https://reqres.in/api/users?page=2")
        .then(response => {
            const userData = response.data;
            console.log(userData.data.length); // there are 6 entries
            for (let i = 0; i < userData.data.length; i++) {
                if (userData.data[i].id === 7) {
                    const userCard = document.createElement("div");
                    userCard.classList.add("card");
                    const userBody = document.createElement("div");
                    userBody.classList.add("card-body");
                    console.log(`User: ${userData.data[i].first_name} ${userData.data[i].last_name} ${userData.data[i].email}`);
                    const userNameTitle = document.createElement("h2");
                    userNameTitle.classList.add("card-title");
                    userNameTitle.innerText = `${userData.data[i].first_name} ${userData.data[i].last_name}`;
                    output.appendChild(userNameTitle);

                    const userName = document.createElement("p");
                    userName.classList.add("card-text");
                    userName.innerText = `User: ${userData.data[i].first_name} ${userData.data[i].last_name}`;
                    output.appendChild(userName);

                    const userId = document.createElement("p");
                    userId.innerText = `User Id: ${userData.data[i].id}`;
                    output.appendChild(userId);

                    const userEmail = document.createElement("p");
                    userEmail.innerText = `User id: ${userData.data[i].email}`;
                    output.appendChild(userEmail);

                    const img = document.createElement("img");
                    img.src = `${userData.data[i].avatar}`
                    output.appendChild(img);
                }
            }
        })
        .catch(err => console.error(err))
}
const deleteAll = () => { // get status code 200 so assume it works
    axios
    .delete("https://reqres.in/api/users")
        .then(response => {
            const userData = response.data;
            console.log("In the axios delete all");
        })
        .catch(err => console.error(err))
}

const deleteById = () => { 
    const userId = deleteUserId.value;
    axios
    .delete(`https://reqres.in/api/users/${id}`)
        .then(response => {
            const userData = response.data;
            console.log("In the axios delete byId");
        })
        .catch(err => console.error(err))
}



document.querySelector("button#listUser").addEventListener("click", getUsers);
document.querySelector("button#listUserByid").addEventListener("click", getUserById7);
document.querySelector("button#deleteAll").addEventListener("click", deleteAll);
document.querySelector("button#delete").addEventListener("click", deleteById);


document.querySelector("#creating").addEventListener("submit", function (event) {
    event.preventDefault(); // this stops the page refreshing and you losing your data
    console.log("This:", this);
    const form = this;
    console.log("COLOUR: ", form.colour);
    const data = {
        first_name: form.firstName.value,
        last_name: form.lastName.value,
        email: form.email.value,
        id: form.userId.value
    }
    console.log("DATA: ", data);
    axios
        .post("https://reqres.in/api/users", data)
        .then(res => {
            console.log("In the axios post"); // this comes up so it should be working? something to do with the resreq api it uses? 
            getUsers();  // this should get the users with the new one added. 
            form.reset(); // resets the form
            form.firstName.focus(); // puts the cursor in the name field
            console.log(res);
        })
        .catch(err => console.error(err));
})

// this isn't working! Why???
const outputSingle = document.querySelector("#userIdSingleForm");
document.querySelector("#userIdSingle").addEventListener("submit", function (event) {
    console.log("In get user by id");
    event.preventDefault();
    const form = this;
    const userId = form.userIdSingle.value;
    axios
        .get(`https://reqres.in/api/unknown/${userId}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.userIdSingle.focus();
            const user = res.data.data;
            console.log(`User: ${user.data[i].first_name} ${user.data[i].last_name} ${user.data[i].email}`);
            const userOutput = document.createElement("p");
            userName.innerText = `User: ${user.data[i].first_name} ${user.data[i].last_name} ${user.data[i].email}`;
            output.appendChild(userOutput);
            let img = document.createElement("img");
            img.src = `${user.data[i].avatar}`
            output.appendChild(img);
            getUsers();
            console.log("In axios: get user by id");
        })
        .catch(err => console.error(err));
});

// this isn't working! - it reloads the page?
document.querySelector("#login").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("This:", this);
    const form = this;
    console.log("COLOUR: ", form.colour);
    console.log("This:", this);
    const data = {
        email: form.loginEmail.value,
        password: form.loginpassword.value
    }
    console.log("DATA: ", data);

    axios
        .post("https://reqres.in/api/login", data)
        .then(res => {
            console.log("In the axios post for login");
            console.log(res);
            form.reset(); // resets the form
            form.loginEmail.focus(); // puts the cursor in the name field
            console.log(res);
        })
        .catch(err => console.error(err));
})

// this isn't working!
document.querySelector("#registration").addEventListener("submit", function (event) {
    event.preventDefault(); // this stops the page refreshing and you losing your data
    console.log("This:", this);
    const form = this;
    console.log("COLOUR: ", form.colour);
    const data = {
        email: form.registrationEmail.value, // here is the prob
        password: form.password.value
    }
    console.log("DATA: ", data);
    axios
        .post("https://reqres.in/api/users", data)
        .then(res => {
            console.log("In the axios post");
            getUsers();
            form.reset(); // resets the form
            form.registrationEmail.focus(); // puts the cursor in the email field
            console.log(res);
        })
        .catch(err => console.error(err));
})


