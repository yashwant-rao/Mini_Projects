const random = Math.floor(Math.random() * 100 + 1);
console.log(random);
const submit = document.querySelector('#subt');
const message = document.querySelector('.lowOrHi');
const prevGuess = document.querySelector('.guesses');
const userInput = document.querySelector('#guessField');
const remainGuess = document.querySelector('.lastResult');
const guesses = [];
let playGame = true;
let count = 0;
const button = document.createElement('button');
message.style.fontSize = '20px';
// submit.addEventListener('click', function (e) {
//  e.preventDefault();
//
//   const num = parseInt(document.querySelector('.guessField').value);
//   checkNum(num);
// });
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    checkNum(guess);
    userInput.value = '';
  });
}

checkNum = (num) => {
  if (num < 1 || num > 100 || isNaN(num)) {
    // console.log(num);
    message.innerHTML = `please enter the number in between 1 to 100`;
  } else {
    count++;
    conditionCheck(num);
    prevGuess.innerHTML = prevGuess.innerHTML + `${num},`;
  }
};

conditionCheck = (num) => {
  if (num === random) {
    message.innerHTML = `you guess the correct number`;
    message.style.backgroundColor = 'green';
    endGame();
  } else if (num > random) {
    message.style.backgroundColor = 'red';
    message.innerHTML = `your guess is higher then the number`;
  } else {
    message.style.backgroundColor = 'red';
    message.innerHTML = `your guess is lower then the number`;
  }
  let val = 10 - count;
  remainGuess.innerHTML = `${val}`;
  if (val === 0) {
    endGame();
  }
};

endGame = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  button.innerHTML = `STSRT NEW GAME`;
  button.style.fontSize = '20px';
  document.querySelector('.resultParas').appendChild(button);
  newGame();
};

newGame = () => {
  button.addEventListener('click', function (e) {
    userInput.value = '';
    userInput.removeAttribute('disabled');
    playGame = true;
     count = 0;
    
    const random = Math.floor(Math.random() * 100 + 1);
    document.querySelector('.resultParas').removeChild(button);
    prevGuess.innerHTML = '';
    remainGuess.innerHTML = '10';
  });
};
