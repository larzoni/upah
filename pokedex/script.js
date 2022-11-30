// grab the things we need ----------
const pokemonEl = document.querySelector(".pokedex-container");
const formEl = document.querySelector("form");
const inputEl = document.querySelector("input[type=text]");

// listen for user events -------------
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    pokemonEl.innerHTML = "";
    getPokemon(inputEl.value);  
    
});

async function getPokemon(name = "pikachu") {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await res.json();


    pokemonEl.classList.add("pokedex");
    pokemonEl.innerHTML = 
    
    `
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" width="300">
    <h3>${pokemon.name}</h3>
    <div class="information">
        <div class="stats">
        <h4>Stats</h4>
        ${pokemon.stats.map((stat) => {
         return `<p>${stat.stat.name}: ${stat.base_stat}</p>`;
        })
        .join("")}
        </div>
    
        <div class="abilities">
        <h4>Abilities</h4>
        ${pokemon.abilities.map((ability) => {
        return `<p>${ability.ability.name}</p>`;
         })
        .join("")}

        </div>
    
    </div>
`
pokemonContainer.appendChild(pokemonEl);
}

getPokemon(390);














//<img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" width="200">


//______lektionen
    // const img = document.createElement("img");
    // img.src = pokemon.sprites.other["official-artwork"].front_default;
    // document.body.append(img);





//      fetch (
//     "https://pokeapi.co/api/v2/pokemon/ditto"
//     )
//     //a promise, happens in the background. use .then to do something when completed
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(data) {
//         // Here we can do something with the data
//         console.log(data.abilities[1].ability.name);
//     });


//     //JSON - only hard code data. 



///add a method or function to convert user input into lower case.