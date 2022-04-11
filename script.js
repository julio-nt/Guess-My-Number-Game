'use strict';

let highscore = 0;
let rightNumber;
/************** Easier query selector ************/
const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');

const changeDifficulty = function (difficulty) {
	easy.removeEventListener('click', start);
	hard.removeEventListener('click', start);
	resetAll();
	if (difficulty === 1) {
		easy.addEventListener('click', start(1));
	}
	if (difficulty === 2) {
		hard.addEventListener('click', start(2));
	}
};

/************************ EASY ************************/
const start = function (lvl) {
	if (lvl == 1) {
		console.log('entering difficulty 1');
		displayDifficulty('Easy (1 to 20)');
		rightNumber = Math.trunc(Math.random() * 20 + 1);

		document.querySelector('.again').addEventListener('click', function () {
			displayMessage('Take a wild guess');
			displayScore('20');
			document.querySelector('.guess').value = '';
			rightNumber = Math.trunc(Math.random() * 20 + 1);

			document.querySelector('.number').textContent = '?';
			document.querySelector('.number').style.backgroundColor = '#FFFFFF';
		});
	}

	/*************************** HARD ***********************/
	if (lvl == 2) {
		console.log('entering difficulty 2');
		displayDifficulty('Hard (1 to 100)');
		rightNumber = Math.trunc(Math.random() * 100 + 1);

		document.querySelector('.again').addEventListener('click', function () {
			displayMessage('Take a wild guess');
			displayScore('20');
			document.querySelector('.guess').value = '';
			rightNumber = Math.trunc(Math.random() * 100 + 1);

			document.querySelector('.number').textContent = '?';
			document.querySelector('.number').style.backgroundColor = '#FFFFFF';
		});
	}
};

/**************** CHECK ******************/
document.querySelector('.check').addEventListener('click', function () {
	let guess = document.querySelector('.guess').value;
	let score = Number(document.querySelector('.score').textContent);

	if (score > 0) {
		if (guess != rightNumber && guess != '') {
			displayMessage(guess > rightNumber ? 'Too high' : 'Too low');
			score--;
			displayScore(score);

			//When correct answer
		} else if (guess == rightNumber) {
			displayMessage('Correct answer!!');
			document.querySelector('.number').style.backgroundColor = '#60b347';
			document.querySelector('.number').textContent = rightNumber;

			if (score > highscore) {
				highscore = score;
				document.querySelector('.highscore').textContent = score;
			}
		}
		if (!guess) displayMessage('No number');
	} else {
		displayMessage('You lost');
		document.querySelector('.number').textContent = rightNumber;
		document.querySelector('.number').style.backgroundColor = '#FF0000';
	}
});

/********************* Display functions ********************/
const displayMessage = message =>
	(document.querySelector('.message').textContent = message);
const displayScore = score =>
	(document.querySelector('.score').textContent = score);
const displayDifficulty = difficulty =>
	(document.querySelector('.difficultyDisplay').textContent = difficulty);
const displayHighscore = highscore =>
	(document.querySelector('.highscore').textContent = highscore);

/********************* Reset highscore button ********************/
document
	.querySelector('.resetHighscore')
	.addEventListener('click', function () {
		document.querySelector('.highscore').textContent = '0';
	});
/********************* Reset game *************************/
const resetAll = function () {
	displayScore('20');
	displayHighscore('0');
	highscore = 0;
	displayMessage('Take a wild guess...');
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.backgroundColor = '#FFFFFF';
	document.querySelector('.guess').value = '';
};
