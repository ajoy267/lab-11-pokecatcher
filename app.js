// import functions and grab DOM elements
import pokemon from './data/pokemon.js';
import { capturedPokemon, encounterPokemon } from './storage-utils.js';

const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemonRadio1 = document.getElementById('pokemon-1');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemonRadio2 = document.getElementById('pokemon-2');
const pokemon3Img = document.getElementById('pokemon-3-img');
const pokemonRadio3 = document.getElementById('pokemon-3');
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
    encounterPokemon(pokemon1.id);
    pokemon1Img.src = pokemon1.url_image;
    pokemonRadio1.value = pokemon1.id;

    let pokemon2 = pokemon[randNum2];
    encounterPokemon(pokemon2.id);
    pokemon2Img.src = pokemon2.url_image;
    pokemonRadio2.value = pokemon2.id;

    let pokemon3 = pokemon[randNum3];
    encounterPokemon(pokemon3.id);
    pokemon3Img.src = pokemon3.url_image;
    pokemonRadio3.value = pokemon3.id;
};

generatePokemon();

let totalPlays = 0;

button.addEventListener('click', ()=>{
    const pickedPokemon = document.querySelector('input[type=radio]:checked');

    if (pickedPokemon) {
        const pickedId = Number(pickedPokemon.value);
        capturedPokemon(pickedId);

        totalPlays++;

        if (totalPlays >= 10) {
            window.location.href = './results/';
        } else {
            generatePokemon();
        }
    }
});
