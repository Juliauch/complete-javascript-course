'use strict';

// const { source } = require('wd/lib/commands');

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🤡 Correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 21;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 3;
// console.log(document.querySelector('.guess').value);
// const x = function () {
//     console.log(23);
// };
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '🫥 No Number';
        displayMessage('🫥 No Number');
        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🙆‍♀️ Correct number!';
        displayMessage('🙆‍♀️ Correct number!');
        document.querySelector('.number').textContent = secretNumber;

        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent =
            // '👾 You lost the game!';
            displayMessage('👾 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

//     // When guess is too high
// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '📈 Too high!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent =
//             '👾 You lost the game!';
//         document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low
// } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '📉 Too low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent =
//             '👾 You lost the game!';
//         document.querySelector('.score').textContent = 0;
//     }
// }
// });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
