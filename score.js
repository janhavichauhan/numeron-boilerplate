// Iteration 5: Store the player score and display it on the game over screen
let score=localStorage.getItem("score")
var s = document.getElementById("score-board")
s.innerHTML=score;

const PlayAgainButton =document.getElementById('play-again-button')
PlayAgainButton.onclick= () => {
    location.href="./index.html"
};