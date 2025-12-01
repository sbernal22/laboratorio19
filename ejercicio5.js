async function obtenerPikachu() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        const data = await response.json();
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);
    } catch (error) {
        console.error("Error:", error);
    }
}
obtenerPikachu();