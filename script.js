const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const tskor0 = document.getElementById("tscore--0");
const tskor1 = document.getElementById("tscore--1");
const skor0 = document.getElementById("score--0");
const skor1 = document.getElementById("score--1");
const reset = document.getElementById("reset");
const at = document.getElementById("at");
const tut = document.getElementById("tut");
const img = document.getElementById("img");
let tscores, score, activePlayer, playing; 
var zar = 0;

const init = function (){
    tscores = [0,0];
    score = 0;
    activePlayer = 0;
    
    tskor0.textContent = 0;
    tskor1.textContent = 0;
    skor0.textContent = 0;
    skor1.textContent = 0;
};

init();

const switchPlayer = function(){
    document.getElementById(`score--${activePlayer}`).textContent = 0;
    score = 0;
    activePlayer = activePlayer === 0?1:0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
};


at.addEventListener("click", function(){

    zar = (Math.floor(Math.random() *6)) +1;
    document.getElementById(`score--${activePlayer}`).textContent = zar;
    img.classList.remove("hidden");
    img.src = `dice${zar}.png`;
});

tut.addEventListener("click", function(){
    document.getElementById(`tscore--${activePlayer}`).textContent = tscores[`${activePlayer}`] += zar;;
    switchPlayer();
    img.classList.add("hidden");
});

reset.addEventListener("click", function(){
    window.location.reload();
});
