const searchButton = document.querySelector("#button");
const limit = 25; // nbre arrays renvoyés par giphy

const giphyAPI = "http://api.giphy.com/v1/gifs/search?api_key=HBcyYfaZuAWw5nusNtT6OmvvQrDPwCOe&q="

searchButton.addEventListener('click', searchGif);

function searchGif(event) {
    event.preventDefault();

    let gifSearched = document.querySelector("#value").value;
    let result = document.querySelector("#result");

    fetch(giphyAPI + gifSearched)
        .then(response => response.json())
        .then(json => {
            const img_url = json.data[getRandomNumber()].images.original.url;
            let output = `<img src="${img_url}" alt="${gifSearched} of Giphy" class="img-fluid">`;
            result.innerHTML = output;
            // document.querySelector("#value").value = "";
        })
        .catch(error => {
            console.error(error);
            result.innerHTML = `Aucun GIF ne correspond à votre recherche « ${gifSearched} »`;
        });
};

function getRandomNumber() {
    return Math.floor(Math.random()*limit);
}



