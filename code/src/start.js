const buttonStart = document.getElementById('buttonStart')
const start = document.getElementById('start') //winStart
const info = document.getElementById('info')

buttonStart.addEventListener('click', () => {
    map.removeAttribute('class', 'hidden')
    info.removeAttribute('class', 'hidden')
    start.setAttribute('class', 'hidden')
    game.initialize()
    game.start()
})

