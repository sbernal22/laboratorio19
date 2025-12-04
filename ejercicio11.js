async function buscarPokemon() {
    const input = document.getElementById("pokemonInput").value;
    const resultado = document.getElementById("resultado");
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
        const data = await response.json();
        let tipos = "";
        for (let i = 0; i < data.types.length; i++) {
            tipos += data.types[i].type.name;
            if (i < data.types.length - 1) {
                tipos += ", ";
            }
        }
        resultado.innerHTML = `
            <img src="${data.sprites.front_default}">
            <p>Nombre: ${data.name}</p>
            <p>Tipos: ${tipos}</p>
        `;
    } catch (error) {
        resultado.innerHTML = "Error: Pokémon no encontrado";
    }
}
document.getElementById("botonBuscar").addEventListener("click", buscarPokemon);