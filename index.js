
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
songPlaying.classList.add("active");
}
function notPlaying() {
  songPlaying.classList.remove("active");
}

//________MUSIC
imgPokemontitle.addEventListener("click", function() {
  const audio = document.getElementById("audioPokemontitle");
  

  if (audio.paused) {audio.play(); isPlaying(); songPlaying.innerHTML = "<span>Now playing:</span>'Pokemon Title'";}
  else {audio.pause(); audio.currentTime = 0; notPlaying(); songPlaying.innerHTML = " ";}; 
}
);

imgPokemart.addEventListener("click", function() {
  const audio = document.getElementById("audioPokemart");
  if (audio.paused) audio.play();
  else {audio.pause(); audio.currentTime = 0; console.log(audio.currentTime)}; 
}
);

imgVerdanturf.addEventListener("click", function() {
  var audio = document.getElementById("audioVerdanturf");
  if (audio.paused) audio.play();
  else audio.pause();
}
);

imgPokerap.addEventListener("click", function() {
  var audio = document.getElementById("audioPokerap");
  if (audio.paused) audio.play();
  else audio.pause();
}
);

imgBelltintower.addEventListener("click", function() {
  var audio = document.getElementById("audioBelltintower");
  if (audio.paused) audio.play();
  else audio.pause();
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