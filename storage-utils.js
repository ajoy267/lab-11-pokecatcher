export function findById(id, items) {
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function getPokedex() {
    const pokedexString = localStorage.getItem('POKEDEX') || '[]';
    const pokedex = JSON.parse(pokedexString);
    return pokedex;
}

export function encounterPokemon(id) {
    const pokedex = getPokedex();
    const pokemonItem = findById(id, pokedex);
    if (pokemonItem) {
        pokemonItem.encountered++;
    } else {
        const newItem = { id: id, encountered: 1, captured: 0 };
        pokedex.push(newItem);
    }
    const pokedexString = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', pokedexString);
}

export function capturedPokemon(id) {
    const pokedex = getPokedex();
    const pokemonItem = findById(id, pokedex);
    pokemonItem.captured++;

    const pokedexString = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', pokedexString);
}
