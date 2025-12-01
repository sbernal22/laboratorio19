const id = prompt("Ingresa el ID del Pokémon:");
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log("Nombre:", data.name);
    })
    .catch(error => {
        console.error("Error:", error);
    });