const deck = []
let btn = document.querySelector("button")
let h1 = document.querySelector("h1")


for(let i = 1; i <= 52; i++){
	// creates numbered cards and puts them in the deck
	let num = i

	// changes the numbers to be from 1 to 13
	if(num>14 && num<28){
		num = num - 13
	}
	else if(num >= 28 && num<41){
		num = num - 26
	}
	else if(num>=41){
		num = num - 39
	}

	// create Aces
	if(num == 1 || num == 14){
		num = "Ace"
	}

	// create Jacks
	if(num == 11){
		num = "Jack"
	}

	// Queens
	if(num == 12){
		num = "Queen"
	}

	// Kings
	if(num == 13){
		num = "King"
	}
	
// create suits
	let s = "Diamonds"
	if(i>=14 && i<=26){
		s = "Clubs"
	}
	else if(i>=27 && i<=39){
		s = "Hearts"
	}
	else if(i>=40){
		s = "Spades"
	}
	// else if(i>=28)

	deck.push({number: num, suit: s})
}

btn.addEventListener("click", randomCard)

function randomCard(){
	let r = 0
	r = Math.floor(Math.random() * 52)
	h1.textContent = deck[r].number + " of "+ deck[r].suit
}
console.log(deck)
