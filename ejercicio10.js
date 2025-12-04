async function obtenerPokemon() {
    const contenedor = document.getElementById("contenedor");
    const pokemones = [];
    for (let i = 1; i <= 10; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemones.push(data);
    }
    pokemones.forEach(pokemon => {
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
            <img src="${pokemon.sprites.front_default}">
            <p>Nombre: ${pokemon.name}</p>
            <p>ID: ${pokemon.id}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
}
obtenerPokemon();