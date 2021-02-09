// program to shuffle the deck of cards

// declare card elements
const actions = [
"A master student misaligned a laser and destroyed a lab. Downgrade a lab to desk.",
"A computer has been running a numerical simulation for too long, got hot and burned a desk. Remove one desk from the board.",
"They saw you harassing a female student. You lose 10 SOP.",
"There is a typo in your paper. You lose 10 SOP",
"You receive a grant. You gain 10 SOP"]

const number = ["2","3","5","6","7","8","9","10","11","12"]

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < actions.length; i++) {
	let card = actions[i];
	deck.push(card);
}
let multiplier = 5;
for (let i = 0; i < number.length; i++) {
	for (let j = 0; j < multiplier; j++) {
		let card = number[i];
		deck.push(card);
	}
}
// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

let current_card = 0;


function pickcard() {
  document.getElementById("card").innerHTML = deck[current_card];
  current_card++;
  if(current_card==deck.length){
  	current_card=0;
  }
}
