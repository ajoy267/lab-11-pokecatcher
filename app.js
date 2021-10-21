// import functions and grab DOM elements
import pokemon from './data/pokemon.js';

const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemon3Img = document.getElementById('pokemon-3-img');
const button = document.getElementById('catch-em');

export const generatePokemon = () => {
    let randNum1 = Math.floor(Math.random() * pokemon.length);
    let randNum2 = Math.floor(Math.random() * pokemon.length);
    let randNum3 = Math.floor(Math.random() * pokemon.length);

    while (
        randNum1 === randNum2 ||
        randNum1 === randNum3 ||
        randNum2 === randNum3
    ) {
        randNum1 = Math.floor(Math.random() * pokemon.length);
        randNum2 = Math.floor(Math.random() * pokemon.length);
        randNum3 = Math.floor(Math.random() * pokemon.length);
    }

    let pokemon1 = pokemon[randNum1];
    pokemon1Img.src = pokemon1.url_image;

    let pokemon2 = pokemon[randNum2];
    pokemon2Img.src = pokemon2.url_image;

    let pokemon3 = pokemon[randNum3];
    pokemon3Img.src = pokemon3.url_image;
};

generatePokemon();

button.addEventListener('click', ()=>{
    generatePokemon();
});