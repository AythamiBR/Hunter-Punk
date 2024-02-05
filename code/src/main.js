// DENTRO DE LA INFO
// 1) COUNTDOWN 
const htmlCountDown = document.getElementById('timer')
const timerId = setInterval(countDown, 1000)
let minutes = 1
let seconds = minutes * 60
function countDown() {
    if (minutes >= 0 && seconds >= 1) {
        if (seconds % 60 === 0) minutes--
        seconds--
        htmlCountDown.innerText = `${minutes} : ${seconds % 60}`
        if (seconds % 60 < 10)
            htmlCountDown.innerText = `${minutes} : 0${seconds % 60}`
    } else {
        clearInterval(timerId)
        htmlCountDown.innerText = `TIME OVER`
    }
}
// 2) HEALTH
// 3) COMPASS

// DENTRO DEL MAPA
const map = document.getElementById('map') //MAPA

// 1) TREASURE
let randomX = Math.floor(Math.random() * 1110)
let randomY = Math.floor(Math.random() * 700)
let treasure = new Treasure(randomX, randomY, map)
treasure.insertTreasure()

// 2) PLAYER
let player = new Player(0, 0, map) //creamos una instancia para el jugador en la esquina superior izquierda y dentro del canvas
player.insertPlayer() //intersamos el jugador en el DOM 

// 3) ENEMIES
let enemy = new Enemy(300, 300, map, player) // creamos una instancia para el enemigo 
let enemy2 = new Enemy(600, 600, map, player)
enemy.insertEnemy() //intersamos el enemigo en el DOM 
enemy2.insertEnemy()

//AL PULSAR TECLAS
window.addEventListener('keydown', (e) => { //cuando pulsamos teclas
    switch (e.key) {
        case 'a':
        case 'A':
        case 'ArrowLeft':
            player.directionX = -1
            break
        case 'd':
        case 'D':
        case 'ArrowRight':
            player.directionX = 1
            break
        case 'w':
        case 'W':
        case 'ArrowUp':
            player.directionY = -1
            break
        case 's':
        case 'S':
        case 'ArrowDown':
            player.directionY = 1
            break
    }
})
window.addEventListener('keyup', (e) => { //CUANDO DEJAMOS DE PULSAR
    if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft' || e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        player.directionX = 0
    }
    if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp' || e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
        player.directionY = 0
    }
})

function move(){ //PARA MOVER JUGADOR Y ENEMIGOS
    player.movePlayer()
    enemy.followPlayer()
    enemy2.followPlayer()
}

let intervalId = setInterval(move, 24) //UNICO INTERVALO
