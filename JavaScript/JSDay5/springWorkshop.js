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

const baseURL = "http://localhost:8080";

axios.get(`${baseURL}/`)
    .then(res => { // handle response with callback
        console.log(res);
        console.log("DATA: ", res.data);
    }).catch(err => console.log(err)); // handle error

// })

const output = document.querySelector("#output");

const readAllProjects = () => {
    axios.get(`${baseURL}//getAllProjects`)
        .then(res => {
            const projects = res.data;
            console.log(projects.length)
            for (let i = 0; i < projects.length; i++) {
                console.log(projects[i])
                const projectCol = document.createElement("div");
                projectCol.classList.add("col");

                const projectCard = document.createElement("div");
                projectCard.classList.add("card");

                const projectBody = document.createElement("div");
                projectBody.classList.add("card-body");

                const projectTitle = document.createElement("h2");
                projectTitle.classList.add("card-title");
                projectTitle.innerText = `${projects[i].name}`;
                output.appendChild(projectTitle);

                const projectName = document.createElement("p");
                projectName.classList.add("card-text");
                projectName.innerText = `Project: ${projects[i].name}`;
                output.appendChild(projectName);

                const projectDays = document.createElement("p");
                projectDays.classList.add("card-text");
                projectDays.innerText = `days: ${projects[i].easy}`;
                output.appendChild(projectDays);

                const projectEase = document.createElement("p");
                projectEase.classList.add("card-text");
                projectEase.innerText = `days: ${projects[i].days}`;
                output.appendChild(projectEase);

                const projectId = document.createElement("p");
                projectId.classList.add("card-text");
                projectId.innerText = `id: ${projects[i].id}`;
                output.appendChild(projectId);

                const projectMaterials = document.createElement("p");
                projectMaterials.classList.add("card-text");
                projectMaterials.innerText = `id: ${projects[i].materials}`;
                output.appendChild(projectMaterials);

                const projectDel = document.createElement("button");
                projectDel.innerText = "DELETE";
                projectDel.classList.add("btn", "btn-danger");
                projectDel.addEventListener("click", () => {
                    axios
                        .delete(`${baseURL}/removeProject/${projects[i].id}`)
                        .then(res => readAllProjects())
                        .catch(err => console.error(err))
                        console.log(res);
                });
                projectBody.appendChild(projectDel);
                projectCard.appendChild(projectBody);
                projectCol.appendChild(projectCard);
                output.appendChild(projectCol);
            }
        })


        .catch(err => console.log(err));
}

const readById = () => {
    const userId = readUserId.value;
    console.log("In read by id")
    axios.get(`${baseURL}//getProjectById/${userId}`)
        .then(res => {
            console.log("In read by id - axios get")
            const project = res.data;
            console.log(project);
            const projectCol = document.createElement("div");
            projectCol.classList.add("col");

            const projectCard = document.createElement("div");
            projectCard.classList.add("card");

            const projectBody = document.createElement("div");
            projectBody.classList.add("card-body");

            const projectTitle = document.createElement("h2");
            projectTitle.classList.add("card-title");
            projectTitle.innerText = `${project.name}`
            output.appendChild(projectTitle);

            const projectName = document.createElement("p");
            projectName.classList.add("card-text");
            projectName.innerText = `Project: ${project.name}`;
            output.appendChild(projectName);

            const projectDays = document.createElement("p");
            projectDays.classList.add("card-text");
            projectDays.innerText = `days: ${project.easy}`;
            output.appendChild(projectDays);

            const projectEase = document.createElement("p");
            projectEase.classList.add("card-text");
            projectEase.innerText = `days: ${project.days}`;
            output.appendChild(projectEase);

            const projectId = document.createElement("p");
            projectId.classList.add("card-text");
            projectId.innerText = `id: ${project.id}`;
            output.appendChild(projectId);

            const projectMaterials = document.createElement("p");
            projectMaterials.classList.add("card-text");
            projectMaterials.innerText = `materials: ${project.materials}`;
            output.appendChild(projectMaterials);

            const projectDel = document.createElement("button");
            projectDel.innerText = "DELETE";
            projectDel.classList.add("btn", "btn-danger");
            projectDel.addEventListener("click", () => {
                axios
                    .delete(`${baseURL}/removeProject/${project.id}`)
                    .then(res => readAllProjects())
                    .catch(err => console.error(err))
                    console.log(res);
            });
            projectBody.appendChild(projectDel);
            projectCard.appendChild(projectBody);
            projectCol.appendChild(projectCard);
            output.appendChild(projectCol);
        })
    .catch(err => console.log(err));
}
document.querySelector("button#read").addEventListener("click", readAllProjects);
document.querySelector("button#readById").addEventListener("click", readById);