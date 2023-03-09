// Coding Steps:
// •	For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
// o	You do not need to do anything special when there is a tie in a round.
// •	Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
// o	You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser’s console.
// The completed project should, when executed, do the following:
// •	Deal 26 Cards to each Player from a Deck of 52 cards.
// •	Iterate through the turns where each Player plays a Card.
// •	The Player who played the higher card is awarded a point
// o	Ties result in zero points for both Players
// •	After all cards have been played, display the score and declare the winner.
// •	Write a Unit Test using Mocha and Chai for at least one of the functions you write.
// compare players cards
    // function to compare values of cards
// deal 26 cards to each player (2 players)
    // function creating 2 arrays on for each player
    // add 26 cards to each array
// Shuffle 52 cards
    // function to randomize elements in an array?
// create deck of cards with values
    // create a class for deck of cards
    // create a class for cards
// create players
    // create a class for players

function compareCards(a,b) {
    if (a > b) {
        return "player 1 wins";
    } else {
        return "player 2 wins"
    }
}
//console.log(compareCards(3,6));
// function player1Deal (data){
//     let player1Cards = [data.splice(0,26)];
//     return player1Cards;
// }
// function player2Deal (data){
//     let player2Cards = [data]
//     return player2Cards;

// }

// let deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
// console.log(player1(deck));
// console.log(player2(deck));
// function shuffleArray(arr) {
//     arr.sort(() => Math.random() - 0.5);
//   }
//   let arr = [1, 2, 3, 4, 5];
//   shuffleArray(arr);
//   console.log(arr)

// function shuffleTheCards (data){
//     data.sort(() => Math.random() - 0.5);

// }
// shuffleTheCards(deck);
// console.log(deck);
// class Card
//     constructor(face, value) {
//         this.face = face;
//         this.value = value;
//     }
  
// }
// let myCard = new Card ("A" ,13);
// console.log(myCard);
const hearts = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const diamonds = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const clubs = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const spades = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let deck = hearts.concat(diamonds, clubs, spades);
    
function shuffleTheCards (data){
    data.sort(() => Math.random() - 0.5);
}
shuffleTheCards(deck);
//console.log(deck);
function player1Deal (data){
    let player1Cards = [data.splice(0,26)];
    return player1Cards;
}
function player2Deal (data){
    let player2Cards = [data]
    return player2Cards;
}
let playerOnesCards = player1Deal(deck);
let playerTwosCards = player2Deal(deck);
// console.log(playerOnesCards);
// console.log(playerTwosCards);
