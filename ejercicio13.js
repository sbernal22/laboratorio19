async function buscarPokemon() {
    const input = document.getElementById("pokemonInput").value;
    const resultado = document.getElementById("resultado");
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
        const data = await response.json();        
        let stats = "<ul>";
        for (let i = 0; i < data.stats.length; i++) {
            stats += `<li>${data.stats[i].stat.name}: ${data.stats[i].base_stat}</li>`;
        }
        stats += "</ul>";
        resultado.innerHTML = `
            <h3>${data.name}</h3>
            ${stats}
        `;
    } catch (error) {
        resultado.innerHTML = "Error: Pokémon no encontrado";
    }
}
document.getElementById("botonBuscar").addEventListener("click", buscarPokemon);