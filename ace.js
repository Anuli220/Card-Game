// Create a suits array and inside that, have the spade, heart, diamond and club

const suits = ["♠️","♥️","♦️","♣️"];

// Create a ranks array with 2-10 as strings and  j,q,k,a as well as strings

const ranks = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

// Rank Values

const rankValues ={"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14};

// Create a score1 and a score2 variable with a value of 0 and a GameActive variable with a value of true

let score1 = 0;
let score2 = 0;
let gameActive = true;

// Create a function of getRandomCard, insiide that, create a variable "suit" with a data type of let and the suit will have a value of "suits array"
//  in the position of the suits array, we will apply math.floor, math.random and we will multiply it by suits.length and we'll also create a rank variable with a data type of let,
//  same as suit and it is going to store the ranks array position filled with math.floor, math.random times ranks.length and we're going to return rank suit and value as rank values of rank

function getRandomCard(){
    let suit = suits[Math.floor(Math.random()*suits.length)];
    let rank = ranks[Math.floor(Math.random()*ranks.length)];

    return {rank,suit,value: rankValues[rank]}
}

// create a function drawCards, inside that, first check if the gameactive is false then return
// create 2 variables; card1 and card2, and while assigning them some values, call the get random card function from them

function drawCards(){
    if(gameActive == false){
        return;
    }

    const card1 = getRandomCard();
    const card2 = getRandomCard();

// get the card1 by id, and change its text content to card 1 rank: and with card 1 suit:
// get the card2 by id, and change its text content to card 2 rank: and with card 2 suit:
//  if the card1's value is more than card2's value, you add 1 to score1 or else if card 2's value is more than card1's value, add 1 to score2
// get the score 1 and score 2 by id and change its text content to score 1 and score 2
// if score 1 >= 5 or score 2 >= 5, then call the endGame function

document.getElementById("card1").textContent = card1.rank + card1.suit;
document.getElementById("card2").textContent = card2.rank + card2.suit;
if(card1.value > card2.value){
    score1++;
}else if(card2.value > card1.value){
    score2++;
}

document.getElementById("score1").textContent = score1;
document.getElementById("score2").textContent = score2;
if(score1 >= 5 || score2 >= 5){
    endGame();
}
}

function endGame(){
    // set the gameActive variable to false, create a winner variable and use the conditional operator to check 
    // if the score1 is greater than score 2, then place player1 in winner or else place player2.
    // get the winner message by id, after that, change its text content and use the winner variable to  write a statement "`winner` wins the game"
    // after that, get the draw button id and make it disabled

    gameActive = false;
    let winner = score1 > score2? "Player 1":"Player 2";
    document.getElementById("winnerMessage").textContent = `${winner} wins the game!`
    document.getElementById("drawBtn").disabled = true;
}

function resetGame(){
    score1 = 0;
    score2 = 0;
    gameActive = true;
  
    document.getElementById("score1").textContent = 0;
    document.getElementById("score2").textContent = 0;
    document.getElementById("card2").textContent = "?";
    document.getElementById("card1").textContent = "?";
    // document.getElementById("result").textContent = "";
    document.getElementById("winnerMessage").textContent = "";
    document.getElementById("drawBtn").disabled = false;
}

