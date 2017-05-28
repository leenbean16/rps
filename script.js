var playerScore = 0;
var compScore = 0;

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtCV2abgZetzgFsYPnTiLw2_jVMeI4H8U",
    authDomain: "rpsfb-5f882.firebaseapp.com",
    databaseURL: "https://rpsfb-5f882.firebaseio.com",
    projectId: "rpsfb-5f882",
    storageBucket: "rpsfb-5f882.appspot.com",
    messagingSenderId: "354718262392"
  };
  firebase.initializeApp(config);
  //Firebase Initialized

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;


function playRock() {
    play('rock');
}

function playPaper() {
    play('paper');
}

function playScissors() {
    play('scissors');
}

function getCompChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var compChooses = choices[Math.floor(Math.random() * choices.length)];
    return compChooses;
}

function play(userPlay) {

    var compChoice = getCompChoice();

    document.getElementById('playerResult').innerHTML = 'You : ' + userPlay + '.';
    document.getElementById('compResult').innerHTML = 'Computer : ' + compChoice + '.';

    if (userPlay == 'rock') {
        if (compChoice == 'rock') {
            document.getElementById('winner').innerHTML = "It's a tie!";
        } else if (compChoice == 'paper') {
            document.getElementById('winner').innerHTML = "Computer wins!";
            compScore++;
        } else if (compChoice == 'scissors') {
            document.getElementById('winner').innerHTML = "You win!";
            playerScore++;
        }
    } else if (userPlay == 'paper') {
        if (compChoice == 'paper') {
            document.getElementById('winner').innerHTML = "It's a tie!";
        } else if (compChoice == 'rock') {
            document.getElementById('winner').innerHTML = "You win!";
            playerScore++;
        } else if (compChoice == 'scissors') {
            document.getElementById('winner').innerHTML = "Computer wins!";
            compScore++;
        }
    } else if (userPlay == 'scissors') {
        if (compChoice == 'scissors') {
            document.getElementById('winner').innerHTML = "It's a tie!";
        } else if (compChoice == 'rock') {
            document.getElementById('winner').innerHTML = "Computer wins!";
            compScore++;
        } else if (compChoice == 'paper') {
            document.getElementById('winner').innerHTML = "You win!";
            playerScore++;
        }
    }


    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;

};
