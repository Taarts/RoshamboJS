import './style.css'

const state = {
  player1: '',
  player2: '',
}

function setupRoshambo(id: 'player1' | 'player2') {
  const rockBtn = document.querySelector(`.${id} #rock`) as HTMLElement
  console.log(rockBtn)
  const paperBtn = document.querySelector(`.${id} button.paper`) as HTMLElement
  const scissorsBtn = document.querySelector(
    `.${id} button.scissors`
  ) as HTMLElement

  function handleClickButton(event: MouseEvent) {
    const thingCLickedOn = event.target
    if (thingCLickedOn instanceof HTMLButtonElement) {
      if (thingCLickedOn.classList.contains('active')) {
        console.log('Clicked on')
      }
    }
  }

  function handleSelectRock(_event: MouseEvent) {
    state[id] = 'rock'
    // selectCondition.style.backgroundColor = 'yellow'
    console.log(state)
  }
  function handleSelectPaper(_event: MouseEvent) {
    state[id] = 'paper'
    //   paperBtn.style.backgroundColor = 'yellow'
    console.log(state)
  }
  function handleSelectScissors(_event: MouseEvent) {
    state[id] = 'scissors'
    //   scissorsBtn.style.backgroundColor = 'yellow'
    console.log(state)
  }

  rockBtn?.addEventListener('click', handleSelectRock)

  paperBtn?.addEventListener('click', handleSelectPaper)

  scissorsBtn?.addEventListener('click', handleSelectScissors)
  const tt = document.querySelector('button')
  if (tt instanceof HTMLButtonElement) {
    tt?.addEventListener('click', handleClickButton)
  }
}

// const restartGameButton = document.querySelector(
//   '#restart'
// ) as HTMLButtonElement

// function restart(_event: Event) {
//   state.player1 = ''
//   state.player2 = ''
// }
// restartGameButton.addEventListener('click', restart)

const winner = state.player1 || state.player2
// const result = document.querySelector('.result') as HTMLElement

function displayResult() {
  if (state.player1 === '' || state.player2 === '') return
  if (state.player1 === state.player2) {
    ;('Tie')
  } else if (state.player1 === 'rock' && state.player2 === 'paper') { ;('Player 2 wins')
// } else if (state.player1 === 'rock' && state.player2 === 'scissors') {
//   ;('Player 1 wins')
// } else if (state.player1 === 'scissors' && state.player2 === 'paper') {
//   ;('Player 1 wins')
// } else if (state.player1 === 'paper' && state.player2 === 'scissors') {
//   ;('Player 2 wins')
// }
  }

setupRoshambo('player1')
setupRoshambo('player2')
