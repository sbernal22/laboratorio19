fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => {
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);
    })
    .catch(error => {
        console.error("Error:", error);
    });