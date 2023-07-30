let subMenu = document.getElementById("subMenu");

      function toggleMenu(){
        subMenu.classList.toggle("open-menu");

      }




// ------------ Game Functionality ------------- //

const colours = [];
const allSquares = document.getElementsByClassName("square");
var correctSquare;
var points = 0;
var correctColourCode;
var attempts = 0;
let gameover = false;

const blinkingText = document.getElementsByClassName('blinkingText');

function toggleBlinking(conditionMet) {
    if (conditionMet) {
      blinkingText[0].classList.add('blinking'); // Add the class to start the blinking animation
    } else {
      blinkingText[0].classList.remove('blinking'); // Remove the class to stop the blinking animation
    }
  }  


function colourGenerator(){
    for (i = 0; i < 9; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var rgbColour = "rgb(" + r + "," + g +"," +b +")";
        colours[i] = rgbColour;
    }
}

function singleColourGenerator(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgbColour = "rgb(" + r + "," + g +"," +b +")";
    correctColourCode = rgbColour;
    return rgbColour;
    
}

function changeSquareColour() {
    colourGenerator();
    console.log(colours);
    var i = 0;
    for (square of allSquares){
        square.style.backgroundColor = colours[i];
        i++;
    }
    makeCorrectSquare();
}

// returns random number from 0 to 9
function pickRandomSquare(){
    let randomNumber = Math.floor(Math.random() * 10);

    console.log(randomNumber);
    return randomNumber;
}

function makeCorrectSquare(){
    let correctSquareNumber = pickRandomSquare();
    correctSquare = correctSquareNumber;
    console.log("Correct Square: " + correctSquareNumber)
    let newColour = singleColourGenerator();
    console.log(newColour);
    allSquares[correctSquareNumber].style.backgroundColor = newColour;
    
}

function checkSelection(i){
    gameover = false;
    toggleBlinking(gameover);
    console.log("selected: " + i);
    if(i == correctSquare){
        console.log("here")
        points++;
    }
    console.log("points: " + points);
    updateScore();
    attempts++;
    if (checkAttempts()){
        document.querySelector(".colorCode").textContent = "Play again? Click any square";
        for (square of allSquares){
            square.style.backgroundColor = "#101010";
        }
        attempts = 0;
        points = 0;
        toggleBlinking(gameover);
    }else{
        changeSquareColour();
        document.querySelector(".colorCode").textContent = correctColourCode;
    }
   
}

function checkAttempts(){
    if(attempts > 10){
        gameover = true;
        return true;
    }
    return false
}

function updateScore(){
    console.log(points);
    var element =  document.querySelector(".score")
    console.log(element);
    if(element){
        document.querySelector(".score").textContent = points;
    }
    
}

