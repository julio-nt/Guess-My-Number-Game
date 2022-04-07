'use strict';

let highscore = 0;
let difficulty = 0;

document.querySelector('.easy').addEventListener('click', function () {
	difficulty = 1;
	document.querySelector('.difficultyDisplay').textContent = 'Easy (1 to 20)';
	start();
});
/*
document.querySelector('.hard').addEventListener('click', function () {
	difficulty = 2;
	document.querySelector('.difficultyDisplay').textContent =
		'Hard (1 to 100)';
	start();
});
*/
/******************************************** EASY ******************************************/
const start = function () {
	if (difficulty === 1) {
		console.log('entering difficulty 1');
		let rightNumber = Math.trunc(Math.random() * 20 + 1);
		document.querySelector('.check').addEventListener('click', function () {
			let guess = document.querySelector('.guess').value;
			let score = Number(document.querySelector('.score').textContent);

			if (score > 0) {
				if (guess != rightNumber && guess != '') {
					displayMessage(
						guess > rightNumber ? 'Too high' : 'Too low'
					);
					score--;
					displayScore(score);

					//When correct answer
				} else if (guess == rightNumber) {
					displayMessage('Correct answer!!');
					document.querySelector('.number').style.backgroundColor =
						'#60b347';
					document.querySelector('.number').textContent = rightNumber;

					if (score > highscore) {
						highscore = score;
						document.querySelector('.highscore').textContent =
							score;
					}
				}
				if (!guess) displayMessage('No number');
			} else {
				displayMessage('You lost');
				document.querySelector('.number').textContent = rightNumber;
				document.querySelector('.number').style.backgroundColor =
					'#FF0000';
			}
			console.log(difficulty, 'difficulty');
		});

		document.querySelector('.again').addEventListener('click', function () {
			displayMessage('Take a wild guess');
			document.querySelector('.score').textContent = '20';
			document.querySelector('.guess').value = '';
			rightNumber = Math.trunc(Math.random() * 20 + 1);

			document.querySelector('.number').textContent = '?';
			document.querySelector('.number').style.backgroundColor = '#FFFFFF';
		});
	} /******************************************** HARD ******************************************/
	/*
	if (difficulty === 2) {
		console.log('entering difficulty 2');
		let rightNumber = Math.trunc(Math.random() * 100 + 1);
		document.querySelector('.check').addEventListener('click', function () {
			let guess = document.querySelector('.guess').value;
			let score = Number(document.querySelector('.score').textContent);

			if (score > 0) {
				if (guess != rightNumber && guess != '') {
					displayMessage(
						guess > rightNumber ? 'Too high' : 'Too low'
					);
					score--;
					displayScore(score);

					//When correct answer
				} else if (guess == rightNumber) {
					displayMessage('Correct answer!!');
					document.querySelector('.number').style.backgroundColor =
						'#60b347';
					document.querySelector('.number').textContent = rightNumber;

					if (score > highscore) {
						highscore = score;
						document.querySelector('.highscore').textContent =
							score;
					}
				}
				if (!guess) displayMessage('No number');
			} else {
				displayMessage('You lost');
				document.querySelector('.number').textContent = rightNumber;
				document.querySelector('.number').style.backgroundColor =
					'#FF0000';
			}
			console.log('difficulty 2 is running');
		});
		document.querySelector('.again').addEventListener('click', function () {
			displayMessage('Take a wild guess');
			document.querySelector('.score').textContent = '20';
			document.querySelector('.guess').value = '';
			rightNumber = Math.trunc(Math.random() * 100 + 1);

			document.querySelector('.number').textContent = '?';
			document.querySelector('.number').style.backgroundColor = '#FFFFFF';
		});
	}*/
};

/********************* Display functions ********************/
const displayMessage = message =>
	(document.querySelector('.message').textContent = message);
const displayScore = score =>
	(document.querySelector('.score').textContent = score);
const displayDifficulty = difficulty =>
	(document.querySelector('.difficultyDisplay').textContent = difficulty);
const grabGuess = guess => (document.querySelector('.guess').value = guess);

/********************* Reset highscore button ********************/
document
	.querySelector('.resetHighscore')
	.addEventListener('click', function () {
		document.querySelector('.highscore').textContent = '0';
	});
