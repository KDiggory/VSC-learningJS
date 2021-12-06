'use strict';

///// Asynchronous code /////
// JS is:
    // event driven 
    // single threaded - Java can do multi threading with processes separate from the main one, JS cannot
    // The solution to not being able to do this is asynchronous code
    // Imagine...
    // two people, if one asks a question, they will wait for an answer. Until the person answers the first is waiting --> This is a synchronous process

    // two other people, one sends an email then gets on with their day whilst waiting for a reply --> This is asynchronour processing

    // It is when JS doesn't wait for a response, it just carries on --> why callbacks are useful, as the response might never come!

// What is it used for??
// HTTP - hypertext transfer protocol
// protocol of the web - is how things communicate over the internet
// HTTPS is HTTP secure --> is encripted


///// Requset + Response /////
// you send a request and get a response, the response is what you use in your code.
// Amazon website bestsellers page - stuff that doesn't change probably HTML, products probably HTTP requests to get all the top items.
// HTTP req/resp have a head and a body, similar to a HTML page. 
// head - metadata
// body - content 
// http://                          198.162.14.1                     :5500                  /12-Async/index.html     
// saying its http                  the ip address                  the port                     the path
                                // local host - my machine      endpoint/entrypoint          what am I getting 


///// Axios /////
// essentially 3 main ways to perform an HTTP request in JS.
// First, oldest and the worst = XML HTTP Request --> very basic and is old and busted.
// Newer, - fetch -> new and busted! More modern but still not great.
// These two are part of JS - you dont need to import anything to use them
// You can import an external library called axios instead
// Axios - new, cool, easy to use. //USE THIS//

// To install an external library in JS?
// just need CDN -> content delivery network

// this is put in the head - doesn't need to interact with DOM so put it at the top not the bottom like other JS scripts. 

const promisesPromises = new Promise((resolve, reject) => {
    const rand = Math.random();

    console.log("Start of promise");
    setTimeout(() => {
        if (rand > 0.5) {
            resolve("Yay!");    
        } else {
            reject("Boo!");
        }
    }, 5_000);  

    console.log("End of promise");
});

const onSuccess = res => console.log("Success:", res);
const onFailure = err => console.error("Failure:", err);

promisesPromises.then(onSuccess).catch(onFailure);

console.log("Hello there!");

const output = document.querySelector("section#pokemon");

axios
    .get("https://pokeapi.co/api/v2/pokemon/snorlax")
    .then(response => {
        const pokemon = response.data;
        console.log("RES:", response);

        const name = document.createElement("h2");
        name.innerText = pokemon.name;
        output.appendChild(name);

        const info = document.createElement("p");
        info.innerText += `ID: ${pokemon.id}\n`;
        info.innerText += `Height: ${pokemon.height}\n`;
        info.innerText += `Weight: ${pokemon.weight}`;
        output.appendChild(info);

        const typeHeading = document.createElement("h2");
        typeHeading.innerText = "Types:";
        output.appendChild(typeHeading);

        const types = document.createElement("ul");
        for (let type of pokemon.types) {
            const typeItem = document.createElement("li");
            typeItem.innerText = type.type.name;
            types.appendChild(typeItem);
        }
        output.appendChild(types);

        const image = document.createElement("img");
        image.src = pokemon.sprites.front_default;
        output.appendChild(image);
    })
    .catch(err => console.error(err));