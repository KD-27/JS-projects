let myMove = '';
let result = '';
let status = '';

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  Losses: 0,
  Ties: 0,
}
updateScoreElements();

function pickComputerMove(){
  let computerMove = '';
  const randomNumber = Math.random();
    
  if(randomNumber >= 0 && randomNumber <= 1/3){
    computerMove ='rock'; 
  }
  else if(randomNumber > 1/3 && randomNumber <= 2/3){
    computerMove ='paper';
  } 
  else{
    computerMove ='scissors';
  }
  return computerMove;
}


function playGame(myMove, computerMove){

    if (computerMove === 'rock'){
      if (myMove === 'rock'){
        result = 'It is a Tie';

      }else if(myMove === 'paper'){
        result = 'You Win. Hurray!';

      }else if(myMove === 'scissors'){
        result = 'Haha! You Lose';

      }

    }else if(computerMove === 'paper'){
      if (myMove === 'rock'){
        result = 'Haha! You Lose';

      }else if(myMove === 'paper'){
        result = 'It is a Tie';

      }else if(myMove === 'scissors'){
        result = 'You Win. Hurray!';
      }
    }else if(computerMove === 'scissors'){
      if (myMove === 'rock'){
        result = 'You Win. Hurray!';

      }else if(myMove === 'paper'){
        result = 'Haha! You Lose';

      }else if(myMove === 'scissors'){
        result = 'It is a Tie';

      } 
    }

    if(result === 'You Win. Hurray!'){
      score.wins += 1;
        
    }else if(result === 'Haha! You Lose'){
      score.Losses += 1;

    }else if(result === 'It is a Tie'){
      score.Ties += 1;
    }
  
  updateMyImg(myMove);
  changeBackground(result);
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElements();
  return result;
}

function updateScoreElements(){
  document.getElementById('js-wins').innerHTML = `Wins : ${score.wins}`;
  document.getElementById('js-losses').innerHTML = `Losses : ${score.Losses}`;
  document.getElementById('js-ties').innerHTML = `Ties : ${score.Ties}`;
}

function updateMyImg(myMove){

  document.querySelector('.js-you-img').innerHTML = `<img class="You-img" src="rock-paper-scissors-images/${myMove}-emoji.png" >`

  document.querySelector('.Computer-img-container').innerHTML = `<img class="You-img" src="rock-paper-scissors-images/${computerMove}-emoji.png" >`
}

function changeBackground(result){
  console.log(result);
  if(result === 'You Win. Hurray!'){

    document.getElementById('js-results-info').style.backgroundColor = 'rgb(10, 154, 68)';
    
  }else if(result === 'Haha! You Lose'){

    document.getElementById('js-results-info').style.backgroundColor = 'rgb(139, 43, 43)';

  }else if(result === 'It is a Tie'){

    document.getElementById('js-results-info').style.backgroundColor = 'rgb(70, 75, 72)';

  }
}
