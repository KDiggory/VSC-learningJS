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

const getUsersForUse = () => {
axios
    .get("https://reqres.in/api/users?page=2")
    .then(response => {
        let userData = response.data;
        console.log("Res:" ,response);
        return userData;
    })
    .catch(err => console.error(err))
}

const getUsers = () => {
    axios
    .get("https://reqres.in/api/users?page=2")
    .then(response => {
        const userData = response.data;
        console.log("Res in get users:" ,response);
        console.log(userData.data.length); // there are 6 entries in it
        for(let i=0; i< userData.data.length;i++) {
            console.log(`User: ${userData.data[i].first_name} ${userData.data[i].last_name}`); // they all print
                const userName = document.createElement("p");
                userName.innerText = `User: ${userData.data[i].first_name} ${userData.data[i].last_name}`;
                output.appendChild(userName);
        }
        

    })
    .catch(err => console.error(err))
}



const getUserById = () => { // make this any id later
    // getUsersForUse(); // a function here that got the data to use would be great, but how??!
    console.log("In get user by id");
    axios
    .get("https://reqres.in/api/users?page=2")
    .then(response => {
        const userData = response.data;
        for(let i=0; i< userData.data.length;i++) {
            if (userData.data[i].id === 7){
            console.log(`User: ${userData.data[i].first_name} ${userData.data[i].last_name} ${userData.data[i].email}`); 
                const userName = document.createElement("p");
                userName.innerText = `User: ${userData.data[i].first_name} ${userData.data[i].last_name} ${userData.data[i].email}`;
                output.appendChild(userName);
                let img = document.createElement("img");
                img.src=`${userData.data[i].avatar}`
                output.appendChild(img);
            }
        }
    })
    .catch(err => console.error(err))
}

document.querySelector("button#listUser").addEventListener("click", getUsers);
document.querySelector("button#listUserByid").addEventListener("click", getUserById);

document.querySelector("#creating").addEventListener("submit",function(event) {
    event.preventDefault();
    console.log("This:",this);
    const form = this;
    const data = {
        first_name: form.first_name.value,
        last_name: form.last_name.value,
        email: form.email.value,
        id: form.id.value
    }
    axios
    .post("https://reqres.in/api/users", data)
        .then(res => {
           // getUsers(); 
            form.reset(); // resets the form
            form.first_name.focus(); // puts the cursor in the name field
            console.log(res);
        })
        .catch(err => console.error(err));
})



