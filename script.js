let computerScore = 0;
let userScore = 0;
let userBoard = document.getElementById('user-score');
let computerBoard = document.getElementById('computer-score');
let userChoiceResult = document.getElementById('user-choice');
let computerChoiceResult = document.getElementById('computer-choice');
let gameResult = document.getElementById('result');

const choices = {
    sasso:{
        sasso:'Pareggio',
        forbice:'Vittoria',
        carta:'Sconfitta',
    },
    forbice:{
        sasso:'Sconfitta',
        forbice:'Pareggio',
        carta:'Vittoria',
    },
    carta:{
        sasso:'Vittoria',
        forbice:'Sconfitta',
        carta:'Pareggi',
    }
}

function checker(input){
    const computerChoices = ['carta', 'forbice', 'sasso'];
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    userChoiceResult.innerHTML = input;
    computerChoiceResult.innerHTML = computerChoice;
    
    switch(choices[input][computerChoice]){
        case ('Vittoria'):
           userScore++;
           userBoard.innerHTML = userScore;
           gameResult.innerHTML = 'HAI VINTO!' 
        break;
        case('Sconfitta'):
           computerScore++
           computerBoard.innerHTML = computerScore;
           gameResult.innerHTML = 'HAI PERSO!'
        break;
        case('Pareggio'):
           gameResult.innerHTML = 'PAREGGIO!'
        break;
        
    }
   
}