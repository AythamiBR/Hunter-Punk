const buttonStart = document.getElementById('buttonStart')
const start = document.getElementById('start')
//const map = document.getElementById('map')
const info = document.getElementById('info')

buttonStart.addEventListener('click', () => {
    map.removeAttribute('class', 'hidden')
    info.removeAttribute('class', 'hidden')
    start.setAttribute('class', 'hidden')
    game.start()
    console.log(buttonStart)
})

