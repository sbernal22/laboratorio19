const id = parseInt(Math.random()*898+1)
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log("ID:", id);
        console.log("Nombre:", data.name);
    })
    .catch(error => {
        console.error("Error:", error);
    });