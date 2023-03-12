// // // function playWar (data, data1) {
// // //     let playerOneTotal = 0
// // //     let playerTwoTotal = 0
// // //     for (let a = 0; a > data.length; a++) {
// // //         return += data[a]
// // //     }
// // //     for (let b = 0; b > data1.lenght; b++) {
// // //         return += 
// // //     }

// // // }
// // // const compareArrays = (a, b) => {
// // //     let totalA = 0
// // //     let totalB = 0
// // //   if (a.length !== b.length) return false;
// // //   else {
// // //     // Comparing each element of your array
// // //     for (var i = 0; i < a.length; i++) {
// // //       if (a[i] > b[i]) {
// // //         totalA += 1

// // //       }
// // //     }
// // //     totalB += 1
// // //   }
// // // };
// // // let array1 = [1,3,6];
// // // let array2 = [0,2.3];
// // // console.log(compareArrays(array1, array2) + totalA + " " + totalB);
// // // let arrOne = [7, 8, 9];
// // // let arrTwo = [8, 5, 3];

// // // let result =
// // //   arrOne.length === arrTwo.length &&
// // //   arrOne.every(function (element, index) {
// // //     // compare if the element matches in the same index
// // //     return element > arrTwo[index];
// // //   });

// // // console.log(result); // true
// // // function solution(A, B) {

// // //     var card1, card2;
// // //     var alecWin = 0;
// // //     var bobWin = 0;
  
// // //     var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
// // //     var alecCards = A.split("");
// // //     var bobCards = B.split("");
  
// // //     for (var i = 0; i < alecCards.length; i++) {
// // //         alecIndex = cards.indexOf(alecCards[i]);
// // //         bobIndex = cards.indexOf(bobCards[i]);
// // //         if (alecIndex > bobIndex) alecWin++;
// // //          }
// // //         return alecWin;

// // // }
  
// // //   console.log(solution("23JK4", "352Q8"))
// // // class Cards {

// // // constructor (value, suit)
// // //     for (let i = 1; i < 14; i++){
// // //     cards.push(Cards(i, 'Spade'));
// // //     cards.push(Cards(i, 'Diamond'));
// // //     cards.push(Cards(i, 'Clubs'));
// // //     cards.push(Cards(i, 'Hearts'));
// // //     } 
// // //     return createDeck;
// // // }
// // //     console.log(createDeck);



// // // dynamically create deck of cards
// // let suits = ["spades", "diamonds", "clubs", "hearts"];
// // let values = [2,3,4,5,6,7,8,9,10,11,12,13,14];  
// // function getDeck()
// // {
// // 	let deck = new Array();

// // 	for(let i = 0; i < suits.length; i++)
// // 	{
// // 		for(let x = 0; x < values.length; x++)
// // 		{
// // 			let card = {Value: values[x], Suit: suits[i]};
// // 			deck.push(card);
// // 		}
// // 	}

// // 	return deck;
// // }
// // const myDeck = getDeck(suits, values);
// // //console.log(myDeck);

// // function shuffleTheCards (data){
// //     data.sort(() => Math.random() - 0.5);
// // }
// // shuffleTheCards(myDeck);

// // //console.log(deck);
// // function player1Deal (data){
// //     let player1Cards = [data.splice(0,26)];
// //     return player1Cards;
// // }
// // function player2Deal (data){
// //     let player2Cards = [data.splice(data)];
// //     return player2Cards;
// // }
// // let playerOnesCards = player1Deal(myDeck);
// // let playerTwosCards = player2Deal(myDeck);
// // let playerOnePoints = 0;
// // let playerTwoPoints = 0;

// // function playerWar (data1,data2) {
	
// // 	for(i = 0; i < data1.length;  i++){
// // 		data1.pop(); 
// // 	}
// // 	for(i = 0; i < data2.length; i++){
// // 		data2.pop();
// // 	}

// // 	}
// // }
// // playerWar(playerOnesCards.values,playerTwosCards.values);
// // //console.log("player 1: " + playerOnePoints + " player 2: " + playerTwoPoints);



// // //{
// // // 	let playerOnePoints = 0;
// // // 	let playerTwoPoints = 0;
// // // 	if (a.values != b.values){
// // // 		for (x = 0; x < a.length; x++) {
// // // 			for (y = 0; y < b.length; y++) {
// // // 			if (a[x].values > b[y].values) {
// // // 				return playerOnePoints += 1;
// // // 			}
// // // 			else if (a[x].values < b[y].values) {
// // // 				return playerTwoPoints += 1;
// // // 			}
// // // 			}
// // // 		}
// // // 	}
// // // // 	if (playerOnePoints > playerTwoPoints) {
// // // // 		alert `Player 1 wins: ${playerOnePoints} is greater than ${playerTwoPoints}!`
// // // // 	} else {
// // // // 		alert `Player 2 wins: ${playerOnePoints} is less than ${playerTwoPoints}!`
// // // // 	}
// // // }
// // // console.log(playWar(playerOnesCards,playerTwosCards));




// // // console.log(playerOnesCards);
// // // console.log(playerTwosCards);
// // //https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
// class Card {
// 	constructor (suit,value){
// 		this.suit = suit;
// 		this.value = value;
// 	}
// }

// class Deck {
// 	constructor() {
// 		this.cards = [];
// 	}
// 	createDeck() {
// 		let suits = ["spades", "diamonds", "clubs", "hearts"];
// 		let values = [2,3,4,5,6,7,8,9,10,11,12,13,14]; 
// 		for(let i = 0; i < suits.length; i++){
// 			for(let x = 0; x < values.length; x++){2
// 				this.cards.push(new Card(suits[i],values[x]));
// 				}
// 		}
// 	}
// 	// shuffleTheDeck(){
// 	// 	cards.sort(() => Math.random() - 0.5);
// 	// }
// 	shuffleTheDeck(){
//         let location1, location2, tmp;
//         for (let i = 0; i < 1000; i++){
//             location1 = Math.floor((Math.random() * this.cards.length));  // gives a random card in the deck
//             location2 = Math.floor((Math.random() * this.cards.length));  // another random card in the deck
//             tmp = this.cards[location1];    
//             this.cards[location1] = this.cards[location2];
//             this.cards[location2] = tmp;
//         }
//     }
// }
// class Player{
// 	constructor(name) {
// 		this.playerName = name;
// 		this.playercards = [];
// 		this.playerScore = 0;
// 	}
// }
// class GamePlay {
// 	constructor(){
// 		this.game = [];
// 		this.players = [];
// 		this.player1Points = 0;
// 		this.player2Points = 0;
// 	}
// 	start(player1Name, player2Name) {
// 		this.players.push(new Player(player1Name));
// 		this.players.push(new Player(player2Name));
// 		let a = new Deck();
// 		a.createDeck();
// 		a.shuffleTheDeck();
// 		this.players[0].playerCards = a.cards.slice(0,26);
// 		this.players[1].playerCards = a.cards.slice(26,52);
// 		this.player1Points = 0;
// 		this.player2Points = 0;
// 	}
// 	compare(){
// 		for(let i = 0; i < 26; i++){
// 			let player1Value = this.players[0].playerCards[i].value
// 			let player2Value = this.players[1].playerCards[i].value
// 			if(player1Value > player2Value){
// 				this.player1Points++
// 			}
// 			else if(player1Value < player2Value){
// 				this.player2Points++
// 			}
// 		}
// 	}
// 	endOfWar(){
// 		console.log(`player 1 score: ${this.player1Points}`);
// 		console.log(`player 2 score: ${this.player2Points}`);
// 		if(this.player1Points > this.player2Points){
// 			return "Player 1 wins!"
// 		}
// 		if(this.player1Points < this.player2Points){
// 			return "Player 2 wins!"
// 		}
// 	}
// }
// let myGame = new GamePlay();
// myGame.start('player 1', 'player 2');
// myGame.compare();
// console.log(myGame.endOfWar());
// let suits = ["spades", "diamonds", "clubs", "hearts"];
// let values = [2,3,4,5,6,7,8,9,10,11,12,13,14]; 

// createDeck() 
	
// 	for(let i = 0; i < suits.length; i++){
// 		for(let x = 0; x < values.length; x++){
// 			this.cards.push(new Card(suits[i],values[x]));
// 		}
// 	}


// describe('MyFuncion', function() {
// 	describe('#createDeck', function() {
// 		it('should create an array of 52 cards', function() {
// 			var x = createDeck();
// 			expect(x.length).to.equal(52);

// 		});
// 	});
// });
// describe('Deck test', function(){
//     let deck = new Deck;
//     deck.createDeck();
//     it("There should be 52 cards in a deck", function(){
//         assert.isArray(deck.createDeck() == []);
//         console.log(deck.cards.length);
//         assert(deck.cards.length == 52);
//     })
// })

// describe('number of cards test', function(){
//     let gamePlay = new gamePlay();
//     gamePlay.start("Player 1", "Player 2");
//     it('Each player should have 26 cards', function(){
//         assert(gamePlay.players[0].playerCards.length == 26 && board.players[1].playerCards.length == 26)
//     })
// })
var expect = chai.expect;
	
	describe('MyFunctions', function() {
		// describe('#createDeck', function(){
		// 	it('should return the winner', function() {
		// 		let x = gamePlay.endOfGame(1,3);
	
		// 		expect(x).to.equal("Player 2 Wins!");
			describe('#doSomething', function) {
				it('should concatenate the two parameters', function(){
					var x = doSomething('hello',5);
					expect(x).to.equal('hello5')
				})
				
			}
			})
		// })
	// })
	