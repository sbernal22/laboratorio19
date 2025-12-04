async function obtenerEstadisticas() {
    const id = prompt("Ingresa el nombre o ID del Pokémon:");
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`);
        const data = await response.json();
        console.log("Nombre:", data.name);
        console.log("Estadísticas Base:");
        for (let i = 0; i < data.stats.length; i++) {
            console.log(data.stats[i].stat.name);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
obtenerEstadisticas();