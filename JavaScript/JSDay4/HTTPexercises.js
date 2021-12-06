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

const output = document.querySelector("section#superhero");
const squadNameOutput = document.querySelector("section#squadname");
const whoOutput = document.querySelector("section#who");
const powerOutput = document.querySelector("section#power");

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        const heroData = response.data;
        console.log("Res: ", response);

        const hideout = document.createElement("p");
        hideout.innerText = heroData.secretBase;
        output.appendChild(hideout);

        const squadName = document.createElement("p");
        squadName.innerText = heroData.squadName;
        squadNameOutput.appendChild(squadName);

        
        const heroOne = heroData.members[0];
        const heroTwo = heroData.members[1];
        const heroThree = heroData.members[2];
        const nameItem = document.createElement("p");
        nameItem.innerText += `${heroOne.name} AKA ${heroOne.secretIdentity}\n`;
        whoOutput.appendChild(nameItem);
        nameItem.innerText += `${heroTwo.name} AKA ${heroTwo.secretIdentity}\n`;
        whoOutput.appendChild(nameItem);
        nameItem.innerText += `${heroThree.name} AKA ${heroThree.secretIdentity}\n`;
        whoOutput.appendChild(nameItem);

        const powers = document.createElement("p");
        powers.innerText += `${heroOne.secretIdentity}: ${heroOne.powers}\n`
        powerOutput.appendChild(powers);
        powers.innerText += `${heroTwo.secretIdentity}: ${heroTwo.powers}\n`
        powerOutput.appendChild(powers);
        powers.innerText += `${heroThree.secretIdentity}: ${heroThree.powers}\n`
        powerOutput.appendChild(powers);

        
        },
        
        

        // const heroNames = document.createElement("pre"); // pre copies the source formatting
        // heroNames.innerText = JSON.stringify(heroData.members[0],null,2);// this is the problem
        // output.appendChild(heroNames);


    )