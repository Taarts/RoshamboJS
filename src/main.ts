import './style.css'
// import { setupCounter } from './counter'
// import rock from './src/images/rock.png'
// import paper from './src/images/paper.png'
// import scissors from './src/images/scissors.png'

// const images = {
//   rock,
// paper,
// scissors,
// }
// function showRoshambo() {
//   switch ('') {
//     case 'rock':
//       return rock
//     case 'paper':
//       return paper
//     case 'scissors':
//       return scissors
//     default:
//   }

const state = {
  player1: '',
  player2: '',
}

function checkGame() {
  if (state.player1 === '' || state.player2 === '') return
  if (state.player1 === 'rock' && state.player2 === 'rock') {
    alert('Tie')
  } else if (state.player1 === 'rock' && state.player2 === 'paper') {
    alert('Player 2 wins')
  } else if (state.player1 === 'rock' && state.player2 === 'scissors') {
    alert('Player 1 wins')
  }
  if (state.player1 === 'paper' && state.player2 === 'rock') {
    alert('Player 1 wins')
  }
  if (state.player1 === 'paper' && state.player2 === 'paper') {
    alert('Tie')
  }
  if (state.player1 === 'paper' && state.player2 === 'scissors') {
    alert('Player 2 wins')
  }
  if (state.player1 === 'scissors' && state.player2 === 'rock') {
    alert('Player 2 wins')
  }
  if (state.player1 === 'scissors' && state.player2 === 'paper') {
    alert('Player 1 wins')
  }
  if (state.player1 === 'scissors' && state.player2 === 'scissors') {
    alert('Tie')
  }
}

function setupRoshambo(id: 'player1' | 'player2') {
  const rockBtn = document.querySelector(`.${id} #rock`) as HTMLElement
  console.log(rockBtn)
  const paperBtn = document.querySelector(`.${id} #paper`) as HTMLElement
  console.log(paperBtn)
  const scissorsBtn = document.querySelector(`.${id} #scissors`) as HTMLElement
  console.log(scissorsBtn)

  const restartBtn = document.querySelector('#restart') as HTMLElement

  function handleSelectRock(_event: MouseEvent) {
    state[id] = 'rock'
    rockBtn.style.color = '#d3df99'
    console.log(state)
    setTimeout(checkGame, 0)
  }

  function handleSelectPaper(_event: MouseEvent) {
    state[id] = 'paper'
    paperBtn.style.color = '#d3df99'
    console.log(state)
    setTimeout(checkGame, 0)
  }

  function handleSelectScissors(_event: MouseEvent) {
    state[id] = 'scissors'
    scissorsBtn.style.color = '#d3df99'
    console.log(state)
    setTimeout(checkGame, 0)
  }
  function handleStart(_event: MouseEvent) {
    state.player1 = ''
    state.player2 = ''
    rockBtn.style.color = '#474d64'
    paperBtn.style.color = '#474d64'
    scissorsBtn.style.color = '#474d64'
    restartBtn.style.color = '#d3df99'
  }

  rockBtn?.addEventListener('click', handleSelectRock)
  paperBtn?.addEventListener('click', handleSelectPaper)
  scissorsBtn?.addEventListener('click', handleSelectScissors)
  restartBtn?.addEventListener('click', handleStart)
}
setupRoshambo('player1')
setupRoshambo('player2')
