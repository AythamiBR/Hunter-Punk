const gameOverScreen = document.createElement('div')
const textGameOver = document.createElement('p')
const buttonTryAgain = document.createElement('button')

gameOverScreen.setAttribute('id', 'gameOverScreen')
textGameOver.setAttribute('id', 'textGameOver')
buttonTryAgain.setAttribute('id', 'buttonTryAgain')
buttonTryAgain.setAttribute('type', 'button')

function insertGameOver() {
    body.appendChild(gameOverScreen)
    gameOverScreen.appendChild(textGameOver)
    gameOverScreen.appendChild(playerImage)
    gameOverScreen.appendChild(buttonTryAgain)
    gameOverScreen.classList.add('hidden')
}

insertGameOver()

textGameOver.innerHTML = 'GAME OVER <p style="color: white;font-size:2vw; text-align:center;">Sorry. Good luck the next time. Never give up!</p>'
buttonTryAgain.innerText = 'TRY AGAIN'

buttonTryAgain.addEventListener('click', () => {
    // map.removeAttribute('class', 'hidden')
    //info.removeAttribute('class', 'hidden')
    // start.setAttribute('class', 'hidden')
    gameOverScreen.classList.add('hidden')
    game.reset()
})