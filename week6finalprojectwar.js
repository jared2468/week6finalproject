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

    class Card { // created a class of cards 
        constructor (suit,value){ // constructor using suit and value for the parameters
            this.suit = suit; // set this suit to equal suit
            this.value = value; // set to this value
        }
    }
    
    class Deck { // declares class for the deck
        constructor() { 
            this.cards = [];
        }
        createDeck() { // creates a deck by iterating through a for lop and push the suits and values into an array of objects
            let suits = ["spades", "diamonds", "clubs", "hearts"];
            let values = [2,3,4,5,6,7,8,9,10,11,12,13,14]; 
            for(let i = 0; i < suits.length; i++){
                for(let x = 0; x < values.length; x++){
                    this.cards.push(new Card(suits[i],values[x]));
                    }
            }
        }
        // shuffleTheDeck(){
        // 	cards.sort(() => Math.random() - 0.5);
        // }
        shuffleTheDeck(){ // used for loop and math.ramdom to move swap cards between locations created a shuffled deck
            let location1, location2, tmp;
            for (let i = 0; i < 1000; i++){
                location1 = Math.floor((Math.random() * this.cards.length));  // gives a random card in the deck
                location2 = Math.floor((Math.random() * this.cards.length));  // another random card in the deck
                tmp = this.cards[location1];    
                this.cards[location1] = this.cards[location2];
                this.cards[location2] = tmp;
            }
        }
    }
    class Player{ // declare Player class, holds name, cards array, and score
        constructor(name) {
            this.playerName = name;
            this.playercards = [];
            this.playerScore = 0;
        }
    }
    class GamePlay { // class for game play 
        constructor(){
            this.game = []; // game array
            this.players = []; // players array
            this.player1Points = 0; // holds player ones points
            this.player2Points = 0; // holds player two points
        }
        start(player1Name, player2Name) { // function to start the play
            this.players.push(new Player(player1Name));
            this.players.push(new Player(player2Name));
            let a = new Deck();
            a.createDeck();
            a.shuffleTheDeck();
            this.players[0].playerCards = a.cards.slice(0,26); // deals 26 cards to player one
            this.players[1].playerCards = a.cards.slice(26,52); // deals 26 cards to player two
            this.player1Points = 0; // sets player ones points to 0
            this.player2Points = 0; // sets player two points to 0
            console.log(this.players[0].playerCards); // log players cards
            console.log(this.players[1].playerCards);
        }
    
        compare(){ // compare card and return the winner
            for(let i = 0; i < 26; i++){ // for loop to iterate through the cards
                let player1Value = this.players[0].playerCards[i].value
                let player2Value = this.players[1].playerCards[i].value
                if(player1Value > player2Value){ // compares the card values between players
                    this.player1Points++ // add point to player 1 if greater than
                }
                else if(player1Value < player2Value){ // compares the card values 
                    this.player2Points++ // adds point to player 2 if less than 
                }
            }
        }
        endOfWar(){ // after the came has completed log the players points, compare points, and declare the winner
            console.log(`player 1 score: ${this.player1Points}`);
            console.log(`player 2 score: ${this.player2Points}`);
            if(this.player1Points > this.player2Points){
                return "Player 1 wins!"
            }
            if(this.player1Points < this.player2Points){
                return "Player 2 wins!"
            }
        }
    }
    let myGame = new GamePlay();
    myGame.start('player 1', 'player 2'); // executes the start of the game of war
    myGame.compare(); // execute compare
    console.log(myGame.endOfWar()); // log the winner
