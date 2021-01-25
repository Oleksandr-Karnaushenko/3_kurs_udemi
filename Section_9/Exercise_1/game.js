// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameResult = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerChoice: '',
  computerChoice: '',
  winner: '',
};

const imgs = document.querySelectorAll('.select img');

function imgSelection() {
  game.playerChoice = this.dataset.option;
  // this.style.width = 500px;
  imgs.forEach(img => (img.style.border = ''));
  this.style.border = '2px solid yellow';
}
imgs.forEach(img => img.addEventListener('click', imgSelection));

function computerSelection() {
  game.computerChoice =
    imgs[Math.floor(Math.random() * imgs.length)].dataset.option;
}

const btn = document.querySelector('button.start');
const divLeftSpan = document.querySelectorAll('div.panel-left span');
const divRightSpan = document.querySelectorAll('div.panel-right span');

function whoWon() {
  if (
    (game.playerChoice === 'papier' && game.computerChoice === 'kamień') ||
    (game.playerChoice === 'kamień' && game.computerChoice === 'nożyczki') ||
    (game.playerChoice === 'nożyczki' && game.computerChoice === 'papier')
  ) {
    game.winner = 'Wygrałeś';
    gameResult.wins++;
  } else if (game.playerChoice === game.computerChoice) {
    game.winner = 'Remis';
    gameResult.draws++;
  } else {
    game.winner = 'Przegrałeś';
    gameResult.losses++;
  }
  gameResult.numbers++;
}

btn.addEventListener('click', () => {
  if (game.playerChoice) {
    computerSelection();
    whoWon();
    divLeftSpan[0].textContent = game.playerChoice;
    divLeftSpan[1].textContent = game.computerChoice;
    divLeftSpan[2].textContent = game.winner;

    divRightSpan[0].textContent = gameResult.numbers;
    divRightSpan[1].textContent = gameResult.wins;
    divRightSpan[2].textContent = gameResult.losses;
    divRightSpan[3].textContent = gameResult.draws;

    document.querySelector(
      `[data-option="${game.playerChoice}"]`
    ).style.boxShadow = '';
    game.playerChoice = '';
  } else alert('Please select!');
});
