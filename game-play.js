
// Card Variables 
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2'); 
let card3 = document.getElementById('card3');
//Start Button 
let startButton = document.getElementById('start');
// Access HTML elements
let acePath = "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ace_of_spades2.svg"; // Ace
let jackPath = "https://upload.wikimedia.org/wikipedia/commons/3/34/Jack_of_hearts2.svg"; // Jack
let fourPath = "https://upload.wikimedia.org/wikipedia/commons/e/e5/4_of_clubs.svg"; // Four
let closedCardPath = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Back03.svg"; // closed 
// Game Details 
  let numClosedCards = 3;
  let openCard1;
  let openCard2;
  let openCard3;
  let currentlyPlaying = true;
  let score = 0;
  let highScore = 0;
// HTML Documents
  let currentStreak = document.getElementById('score-number');
  let bestStreak = document.getElementById('high-score-number');
  currentStreak.innerHTML = score;
  bestStreak.innerHTML = highScore;
// Check Click 
const isClicked = (card) => {
if (card.src == closedCardPath) {
  return false;
} else {
  return true;
}
}
// Checking Cards
const isAce = (card) => {
if (card.src === acePath) {
  return true;
} else {
  return false;
}
}
// LOGIC
const playCard = (card) => {
  numClosedCards--;
if (numClosedCards === 0) {
  gameOver('win');
} else if (isAce(card)) {
  gameOver('lose');
}
}
// if/Else Generator (3 possible combinations)
 const randomBadCardGenerator = () => {
  badCard = Math.floor(Math.random() * numClosedCards);
  if (badCard === 0) {
    openCard1 = acePath;
    openCard2 = jackPath;
    openCard3 = fourPath;
  } else if (badCard === 1) {
    openCard2 = acePath;
    openCard1 = jackPath;
    openCard3 = fourPath;
   } else {
    openCard3 = acePath;
    openCard1 = jackPath;
    openCard2 = fourPath;
 }
 }
// Define game logic to check cards, progress game, end game, and choose a random bad card
card1.onclick = () => {
if(currentlyPlaying && !isClicked(card1)) {
  card1.src = openCard1;
  playCard(card1);
}
}
//
card2.onclick = () => {
if(currentlyPlaying && !isClicked(card2)) {
  card2.src = openCard2;
  playCard(card2);
}
}
//
card3.onclick = () => {
if(currentlyPlaying && !isClicked(card3)) {
  card3.src = openCard3;
  playCard(card3);
}
}
// Starting the Game 
startButton.onclick = () => {
  startRound();
}
//
const startRound = () => {
// Reset all the cards to be closed
card1.src = closedCardPath;
card2.src = closedCardPath;
card3.src = closedCardPath;
numClosedCards = 3;
currentlyPlaying = true;
startButton.innerHTML = 'Draw A Card';
randomBadCardGenerator();
}
// Writing Play and Game Over Logic
const gameOver = (str) => {
if(str === 'win') {
  startButton.innerHTML = 'You Win! Click to play again';
  getYourScore();
} else {
  startButton.innerHTML = "You drew the Ace! Click to play again"
  score = 0;
  currentStreak.innerHTML = score;
}
currentlyPlaying = false;
}
// SCORE -> print to HTML 
const getYourScore = () => {
score++;
currentStreak.innerHTML = score;
if (score > highScore) {
  highScore = score;
  bestStreak.innerHTML = highScore;
}
}
// Start Game Round 
startRound();

// End of Program :) 

