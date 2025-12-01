async function listarPokemon() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();
        console.log("Primeros 20 Pokémon:");
        data.results.forEach((pokemon) => {
            console.log(pokemon.name);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}
listarPokemon();