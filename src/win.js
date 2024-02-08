const body = document.querySelector('body')

const winScreen = document.createElement('div')
const textWin = document.createElement('p')
const medal = document.createElement('div')
const playerImage = document.createElement('div')
const buttonReset = document.createElement('button')

winScreen.setAttribute('id', 'winScreen')
textWin.setAttribute('id', 'textWin')
medal.setAttribute('id', 'medal')
playerImage.setAttribute('id', 'playerImage')
buttonReset.setAttribute('id', 'buttonReset')
buttonReset.setAttribute('type', 'button')

function insertWin(){
    body.appendChild(winScreen)
    winScreen.appendChild(textWin)
    winScreen.appendChild(medal)
    winScreen.appendChild(playerImage) 
    winScreen.appendChild(buttonReset)
    winScreen.classList.add('hidden')
}

insertWin()

textWin.innerHTML = 'CONGRATULATIONS, YOU WIN!!! <br > <p style="margin: 5vw;color: white;font-size:2vw; text-align:center;">I knew you could so take your half and this medal for being so brave. <br> You are the real treasure hunter. </p>'
buttonReset.innerText = 'RESET'

buttonReset.addEventListener('click', () => {
    winScreen.setAttribute('class', 'hidden')
    game.reset()
})