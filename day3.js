let pokemonForm = document.querySelector("form");
let pokemonArea = document.querySelector("#pokemon-area");

// (1) control the form behavior upon submit
pokemonForm.addEventListener("submit", getPokemon);

async function getPokemon(evt) {
    // this prevents the page from re-loading
    evt.preventDefault();
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/" + evt.target.pokemon.value.toLowerCase();
    // (2) upon form submit, call the Pokemon API
    let response = await fetch(apiUrl);
    let responseData = await response.json(); 
    // (3) grab what we want from results of the pokemon API call, and put it on page
    generateHTML(responseData);
}

function generateHTML(pokeData) {
    pokemonArea.innerHTML = `
        <h1>${pokeData.species.name}</h1>
        <p>Height: ${pokeData.height}</p>
        <p>Weight: ${pokeData.weight}</p>
        <img src="${pokeData.sprites.front_default}" alt="Pokemon image" />
    `;
}