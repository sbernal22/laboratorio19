async function buscarPokemon() {
    const id = document.getElementById("pokemonId").value;
    const resultado = document.getElementById("resultado");
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const habilidades = data.abilities.map(a => a.ability.name);
        resultado.innerHTML = `
            <img src="${data.sprites.front_default}">
            <p>Nombre: ${data.name}</p>
            <p>ID: ${data.id}</p>
            <p>Peso: ${data.weight}</p>
            <p>Altura: ${data.height}</p>
            <p>Habilidades: ${habilidades}</p>
        `;
    } catch (error) {
        console.error("Error:", error);;
    }
}
document.getElementById("botonBuscar").addEventListener("click", buscarPokemon);