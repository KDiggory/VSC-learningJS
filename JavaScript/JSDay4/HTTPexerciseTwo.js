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



const output = document.querySelector("#output");

const kings = [];

document.querySelector("#filter").addEventListener("input", (event) => {
    renderKings(event.target.value);
});


const renderKings = (filter) => {
    output.innerHTML = "";

    for (let king of kings) {
        if (filter && !king.nm.toLowerCase().startsWith(filter)) 
            continue;

        const kingContainer = document.createElement("div");

        const kingName = document.createElement("p");
        kingName.innerText = `Name: ${king.nm}`;
        kingContainer.appendChild(kingName);

        const kingCity = document.createElement("p");
        kingCity.innerText = `City: ${king.cty}`;
        kingContainer.appendChild(kingCity);

        const kingHouse = document.createElement("p");
        kingHouse.innerText = `House: ${king.hse}`;
        kingContainer.appendChild(kingHouse);

        const kingYears = document.createElement("p");
        kingYears.innerText = `Years: ${king.yrs}`;
        kingContainer.appendChild(kingYears);

        output.appendChild(kingContainer);
    }
}

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
    .then(({data}) => {
        kings.push(...data);
        renderKings();
    })
    .catch(err => console.error(err)); 


// axios
//     .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
//     .then(response => {
//         const historicalData = response.data;
//         console.log("Res: ", response);


//         // prints all the king names to the console
//         for (let i = 0; i< historicalData.length; i++) {
//         let kingName =  historicalData[i].nm;
//         console.log(kingName);
//         }
        
        
//     })
// // need a catch!

// //axios.get to call data and put in an array, another function to call data and put into page. 
// // then can iterate over that 50-58 in own function

//     },)
//     .catch(err => console.error(err))
       