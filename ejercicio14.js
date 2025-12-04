let pokemones = [];
let paginaActual = 0;
const pokemonPorPagina = 3;
async function cargarPokemon() {
    for (let i = 1; i <= 12; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemones.push(data);
    }
    mostrarPokemon();
}
const mostrarPokemon=()=>{
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";        
    const inicio = paginaActual * pokemonPorPagina;
    const fin = inicio + pokemonPorPagina;        
    for (let i = inicio; i < fin && i < pokemones.length; i++) {
        const pokemon = pokemones[i];
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
            <img src="${pokemon.sprites.front_default}">
            <p>Nombre: ${pokemon.name}</p>
            <p>ID: ${pokemon.id}</p>
        `;
        contenedor.appendChild(tarjeta);
    }
}
document.getElementById("botonAnterior").addEventListener("click", ()=> {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPokemon();
    }
});
document.getElementById("botonSiguiente").addEventListener("click", ()=> {
    if ((paginaActual + 1) * pokemonPorPagina < pokemones.length) {
        paginaActual++;
        mostrarPokemon();
    }
});
cargarPokemon();