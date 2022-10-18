import './style.css'
// import { setupCounter } from './counter'

const state = {
  player1: '',
  player2: '',
}
alert()
let userScore: number = 0
let computerScore: number = 0
let counter: number = 0

function startGame() {
  userScore = 0
  computerScore = 0
  counter = 0
  outputMessage("Let's play!")
  hideStartButton()
}
function outputMessage(message: string): void {
  alert(message)
}

function hideStartButton(): void {
  let startButton: HTMLButtonElement = document.querySelector('.start-button')
  startButton.style.display = 'none'
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
    rockBtn.style.backgroundColor = '#d3df99'
    console.log(state)
  }
  function handleSelectPaper(_event: MouseEvent) {
    state[id] = 'paper'
    paperBtn.style.backgroundColor = '#d3df99'
    console.log(state)
  }
  function handleSelectScissors(_event: MouseEvent) {
    state[id] = 'scissors'
    scissorsBtn.style.backgroundColor = '#d3df99'
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
  } else if (state.player1 === 'rock' && state.player2 === 'paper') {
    ;('Player 2 wins')
  }
  // else if (state.player1 === 'rock' && state.player2 === 'scissors') {
  //   ;('Player 1 wins')
  // } else if (state.player1 === 'scissors' && state.player2 === 'paper') {
  //   ;('Player 1 wins')
  // } else if (state.player1 === 'paper' && state.player2 === 'scissors') {
  //   ;('Player 2 wins')
  // }
}

setupRoshambo('player1')
setupRoshambo('player2')
// setupCounter('counter')
