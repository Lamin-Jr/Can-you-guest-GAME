'use strict'



//The calculation of the secret Number should
const secretNumber = Math.trunc (Math.random() * 30 + 1);
console.log (secretNumber);

let score = 20;

//A function That Displays the messages for
let displayMessage = function (message) {
  document.querySelector ('.message').textContent = message;
}

// dont define the even checker outside the event
// let check = document.querySelector ('.check');

document.querySelector('.check').addEventListener('click', function () {
  
    const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'π« there is no number ';
    displayMessage('π« there is no number ');

  } else if (guess === secretNumber) {
    document.querySelector('body').style = 'background-color:green';
    document.querySelector('.number').style = 'width: 40rem !important';
    // document.querySelector('.message').textContent = 'β Correct Number';
    displayMessage('β Correct Number');
    document.querySelector('.number').textContent = secretNumber;
   //If the Number is Above the Range
  }else if (guess > 31) {
    score--;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'βThat is not correct Number';
    displayMessage('βThat is not correct Number');

    //If the Guess is Wrong
  }else if (guess !== secretNumber) {
      if (score > 1) {
          score--;
          document.querySelector('.score').textContent = score;
          // document.querySelector('.message').textContent = guess > secretNumber ? `π Is Too High ${guess}` :`π Is too Low ${guess}`;
          displayMessage(
            guess > secretNumber
              ? `π Is Too High ${guess}`
              : `π Is too Low ${guess}`
          );
      }else if (guess) {
          // document.querySelector('.message').textContent = 'π’π€ You have lost the game';

          displayMessage('π’π€ You have lost the game');
      }
      
  }
  // else if (guess < secretNumber) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = 'π Is too Low';
  //     } else if (guess) {
  //       document.querySelector('.message').textContent =
  //         'π’You have lost the game';
  //     }
  // }
  
});
//The Page reloader
document.querySelector('.again').addEventListener('click', function(event){
  event=location.reload();
}, false);

// let loper = 90;

// for (let i = 0; i < 10; i++) {
//   console.log (`${i} there we go`);
// }