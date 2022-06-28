const API_KEY = "_bCDsear9k6MAzuvx9zfnV2tLoA"
// const API_KEY = "_bCDsear9k6MAzuvx9zfnV2tLdddd"
const API_URL = "https://ci-jshint.herokuapp.com/api"
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    const response = await fetch(queryString);
    // need to convert response to JSON
    const data = await response.json();

    if (response.ok) {
        // console.log(data);
        displayStatus(data)
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    let heading = "API Key Status";
    let results = `<div>Your key is valid until:</div>`;
    results += `<div class = "key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;

    resultsModal.show();

}