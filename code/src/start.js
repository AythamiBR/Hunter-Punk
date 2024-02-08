const buttonStart = document.getElementById('buttonStart')
const start = document.getElementById('start') //winStart
const info = document.getElementById('info')

const audioStart = new Audio("./sounds/intro.wav")
//audioStart.controls = true
audioStart.loop = true
audioStart.autoplay = true
audioStart.play()

buttonStart.addEventListener('click', () => {
    map.removeAttribute('class', 'hidden')
    info.removeAttribute('class', 'hidden')
    start.setAttribute('class', 'hidden')
    game.initialize()
    game.start()
})

