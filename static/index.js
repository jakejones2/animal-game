const playSounds = document.getElementById("play-sounds");
const score = document.getElementById("score");
const highScore = document.getElementById("high-score");
const level = document.getElementById("level");
const popUp = document.getElementById("pop-up");
const popUpText = document.getElementById("pop-up-text");
const fade = document.getElementById("fade");

const bee = document.getElementById("bee");
const cat = document.getElementById("cat");
const cockrel = document.getElementById("cockrel");
const cow = document.getElementById("cow");
const dog = document.getElementById("dog");
const dragon = document.getElementById("dragon");
const goat = document.getElementById("goat");
const pig = document.getElementById("pig");

const beeSound = new Audio("./audio_samples_mp3/bee.mp3");
const catSound = new Audio("./audio_samples_mp3/cat.mp3");
const cockrelSound = new Audio("./audio_samples_mp3/cockrel.mp3");
const cowSound = new Audio("./audio_samples_mp3/cow.mp3");
const dogSound = new Audio("./audio_samples_mp3/dog.mp3");
const dragonSound = new Audio("./audio_samples_mp3/dragon.mp3");
const goatSound = new Audio("./audio_samples_mp3/goat.mp3");
const pigSound = new Audio("./audio_samples_mp3/pig.mp3");
const allSounds = [
  beeSound,
  catSound,
  cockrelSound,
  cowSound,
  dogSound,
  dragonSound,
  goatSound,
  pigSound,
];

// global vars
let randomOrder = randomIntegerArray(3);
let numberOfSounds = +level.innerHTML + 2;
let count = 0;
let playerOrder = [];

function randomIntegerArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 8));
  }
  return arr;
}

function showPopUp(message, time = 1500) {
  fade.style.display = "block";
  popUp.style.display = "block";
  popUpText.innerHTML = message;
  setTimeout(() => {
    fade.style.display = "none";
    popUp.style.display = "none";
  }, time);
}

function guess(number) {
  allSounds[number].play();
  playerOrder.push(number);
  count++;
  if (count === numberOfSounds) {
    let hasWon = true;
    for (let i = 0; i < numberOfSounds; i++) {
      if (randomOrder[i] !== playerOrder[i]) {
        hasWon = false;
        break;
      }
    }
    if (hasWon) {
      showPopUp("Good Job");
      playerOrder = [];
      count = 0;
      level.innerHTML++;
      numberOfSounds++;
      randomOrder = randomIntegerArray(numberOfSounds);
    } else {
      showPopUp("Listen more carefully");
      playerOrder = [];
      count = 0;
    }
  }
}

function playNewSoundsAndResetRound() {
  showPopUp(`Level ${level.innerHTML}...`, 2000 * numberOfSounds);
  count = 0;
  playerOrder = [];
  randomOrder = randomIntegerArray(numberOfSounds);
  for (let i = 0; i < numberOfSounds; i++) {
    setTimeout(() => {
      allSounds[randomOrder[i]].play();
    }, i * 2000);
  }
}

playSounds.addEventListener("click", playNewSoundsAndResetRound);

bee.addEventListener("click", () => {
  guess(0);
});
cat.addEventListener("click", () => {
  guess(1);
});
cockrel.addEventListener("click", () => {
  guess(2);
});
cow.addEventListener("click", () => {
  guess(3);
});
dog.addEventListener("click", () => {
  guess(4);
});
dragon.addEventListener("click", () => {
  guess(5);
});
goat.addEventListener("click", () => {
  guess(6);
});
pig.addEventListener("click", () => {
  guess(7);
});
