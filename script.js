// declarations
const URL = "https://swapi.dev/api/people/"
const pulldownMenu = document.querySelector("#selection");
const tableBody = document.querySelector("#table");
const run = () => fetchData().then(r => generateTable(r));

// fetch data from swapi
const fetchData = async function () {
    const userSelection = pulldownMenu.value;
    if (userSelection !== "Make a choice:") {
        const remoteData = await fetch(URL + userSelection)
        return remoteData.json();
    }
}

// generate pulldown menu for user selection
function generatePulldownMenu() {
    pulldownMenu.innerHTML = `<option>Make a choice:</option>`
    for (let i = 1; i < 21; i++) {
        const option = `<option value=${i}>${i}</option>`;
        pulldownMenu.innerHTML += option;
    }
}

// display character information in a table
function generateTable(data) {
    const name = `<tr><td>Name:</td><td>${data.name}</td></tr>`;
    const height = `<tr><td>Height:</td><td>${data.height}</td></tr>`;
    const mass = `<tr><td>Weight:</td><td>${data.mass}</td></tr>`;
    const hair = `<tr><td>Hair Color:</td><td>${data.hair_color}</td></tr>`;
    const birthYear = `<tr><td>Birth Year:</td><td>${data.birth_year}</td></tr>`;
    tableBody.innerHTML = name + height + mass + hair + birthYear;
}

pulldownMenu.addEventListener('change', run);