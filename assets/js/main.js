// main.js
//Define Random Number Function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

//Define divs variable as all divs inside grid container
let divs = document.querySelectorAll(".grid-container div");

let rotation = 0;
document.addEventListener("click", function () {
let min = 10;
let max = 40;
rotation += Math.floor(Math.random() * (max - min + 1)) + min;
document.body.style.transform = `rotate(${rotation}deg)`;
});
  console.log(divs.length, "randomize!");
document.addEventListener("click", randomize);
document.body.style.transform = rotate (90); 

function randomNumber(min, max){
return Math.floor(Math.random() * (max - min) + 1) + min;
}