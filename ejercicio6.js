async function obtenerCharizard() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
        const data = await response.json();
        console.log("Sprite:", data.sprites.front_default);
    } catch (error) {
        console.error("Error:", error);
    }
}
obtenerCharizard();