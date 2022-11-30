
// VARIABLES
let sky = document.getElementById('sky');
let wooper = document.getElementById('wooper');
let city = document.getElementById('city');
let mountain = document.getElementById('mountain');
let upahBeats = document.getElementById('upahBeats');

//Nav-Variables
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
let btnClicked = false;

//Play Button
let imgPokemontitle = document.getElementById("imgPokemontitle");
const boxes = document.querySelectorAll('#imgPokemontitle, #imgPokemart, #imgPokerap, #imgVerdanturf, #imgBelltintower');

//Now Playing
const songPlaying = document.getElementById("isPlaying");

//IMAGES
var imageInactive = `../images/imageinactive.png`;
var imageActive = `../images/audioactive.png`;
let isImageActive = false


boxes.forEach(box => {
  box.addEventListener('click', () => { 
    if (!isImageActive) {
      box.src = imageActive;
      isImageActive = true
      box.setAttribute('style', 'animation: rotation 1s infinite linear;');
  } else {
      box.src = imageInactive;
      isImageActive = false
      box.setAttribute('style', 'background-color: none');
  }
}) });

//____________________FUNCTIONS

//____SHOW WHATS PLAYING
function isPlaying() {
// songPlaying.classList.add("active");
}
function notPlaying() {
  // songPlaying.classList.remove("active");
}

//________MUSIC
imgPokemontitle.addEventListener("click", function() {
  const audio = document.getElementById("audioPokemontitle");

  if (audio.paused) {audio.play(); isPlaying(); songPlaying.innerHTML = "Now playing: 'Pokemon Title'";}
  else {audio.pause(); audio.currentTime = 0; notPlaying(); songPlaying.innerHTML = "<h4>LO-FI MUSIC by UPAH</h4></h4>";}; 
}
);


imgPokemart.addEventListener("click", function() {
  const audio = document.getElementById("audioPokemart");

  if (audio.paused) {audio.play(); isPlaying(); songPlaying.innerHTML = "Now playing: 'Pokemart'";}
  else {audio.pause(); audio.currentTime = 0; notPlaying(); songPlaying.innerHTML = "<h4>LO-FI MUSIC by UPAH</h4></h4>";}
}
);


imgVerdanturf.addEventListener("click", function() {
  var audio = document.getElementById("audioVerdanturf");

  if (audio.paused) {audio.play(); isPlaying(); songPlaying.innerHTML = "Now playing: 'Verdan turf'";}
  else {audio.pause(); audio.currentTime = 0; notPlaying(); songPlaying.innerHTML = "<h4>LO-FI MUSIC by UPAH</h4></h4>";}
}
);


imgPokerap.addEventListener("click", function() {
  var audio = document.getElementById("audioPokerap");
 if (audio.paused) {audio.play(); isPlaying(); songPlaying.innerHTML = "Now playing: 'Pokerap'";}
  else {audio.pause(); audio.currentTime = 0; notPlaying(); songPlaying.innerHTML = "<h4>LO-FI MUSIC by UPAH</h4></h4>";}
}
);


imgBelltintower.addEventListener("click", function() {
  var audio = document.getElementById("audioBelltintower");
  if (audio.paused) {audio.play(); isPlaying(); songPlaying.innerHTML = "Now playing: 'Belltin Tower'";}
  else {audio.pause(); audio.currentTime = 0; notPlaying(); songPlaying.innerHTML = "<h4>LO-FI MUSIC by UPAH</h4></h4>";}
}
);

// Parallax
window.addEventListener('scroll', () => {
    let { scrollY } = window;

    mountain.style.top = (100 + 0.15 * scrollY) + 'px';
    city.style.top =  (300 + -0.4 * scrollY) + 'px'; 
    wooper.style.left = 3.1 * scrollY + 'px';
    sky.style.top = -0.01 * scrollY + 'px';
    upahBeats.style.top = (300 + -0.5 * scrollY) + 'px';
});

// Sticky Navbar

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }}

window.onscroll = function() {myFunction()};


//_____
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
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" width="250">
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

getPokemon(194);
