const buttonStart = document.getElementById('buttonStart')
const start = document.getElementById('start') //winStart
const info = document.getElementById('info')
let audio1

// window.addEventListener('DOMContentLoaded', (e) => {
//     audio1 = document.getElementById('audioIntro')

// })

buttonStart.addEventListener('click', () => {
    map.removeAttribute('class', 'hidden')
    info.removeAttribute('class', 'hidden')
    start.setAttribute('class', 'hidden')
    game.initialize()
    game.start()
    //audio1.pause()
})

