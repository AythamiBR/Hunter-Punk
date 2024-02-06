// DENTRO DE LA INFO
// 1) COUNTDOWN 
const htmlCountDown = document.getElementById('timer')
// const timerId = setInterval(countDown, 1000)
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
        htmlCountDown.innerText = `TIME'S OVER`
    }
}
// 2) HEALTH
// 3) COMPASS

// DENTRO DEL MAPA
const map = document.getElementById('map') //MAPA


// 3) ENEMIES
//let enemy = new Enemy(300, 300, map, player) // creamos una instancia para el enemigo 
//let enemy2 = new Enemy(600, 600, map, player)
//enemy.insertEnemy() //intersamos el enemigo en el DOM 
//enemy2.insertEnemy()

// 4) PISTA-TRAMPA
let randomXPista = Math.floor(Math.random() * 1110)
let randomYPista = Math.floor(Math.random() * 700)
let randomXTrampa = Math.floor(Math.random() * 1110)
let randomYTrampa = Math.floor(Math.random() * 700)
let pista = new Pista(randomXPista, randomYPista, map)
let trampa = new Trampa(randomXTrampa, randomYTrampa, map)
pista.insertPista()
trampa.insertTrampa()




function move(){ //PARA MOVER JUGADOR Y ENEMIGOS
    player.movePlayer()
   // enemy.followPlayer()
    //enemy2.followPlayer()
    treasure.checkCollision()

}

//let intervalId = setInterval(move, 24) //UNICO INTERVALO

class Game {
    constructor() {
        this.player = new Player(0, 0, map)
        this.enemy = new Enemy(600, 600, map, this.player)
        this.treasure = new Treasure(Math.floor(Math.random() * 1110), Math.floor(Math.random() * 700), map)
        this.gameTimer = null
    }

    // GAME SETUP
    bindKeys() {
        //AL PULSAR TECLAS
        window.addEventListener('keydown', (e) => { //cuando pulsamos teclas
            switch (e.key) {
                case 'a':
                case 'A':
                case 'ArrowLeft':
                    this.player.directionX = -1
                    break
                case 'd':
                case 'D':
                case 'ArrowRight':
                    this.player.directionX = 1
                    break
                case 'w':
                case 'W':
                case 'ArrowUp':
                    this.player.directionY = -1
                    break   
                case 's':
                case 'S':
                case 'ArrowDown':
                    this.player.directionY = 1
                    break
            }
        })

        window.addEventListener('keyup', (e) => { //CUANDO DEJAMOS DE PULSAR
            if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft' || e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
                this.player.directionX = 0
            }
            if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp' || e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
                this.player.directionY = 0
            }
        })
    }

    initialize () {
        this.bindKeys()
        this.player.insertPlayer()
        this.enemy.insertEnemy()
        this.treasure.insertTreasure()
    }

    // COLLISIONS
    checkCollisionPlayerTreasure() {
        return (this.treasure.x < this.player.x + this.player.width &&
            this.treasure.y < this.player.y + this.player.height &&
            this.treasure.x + this.treasure.width > this.player.x &&
            this.treasure.y + this.treasure.height > this.player.y)
    }

    checkCollisionPlayerEnemy() {
        return (this.enemy.x < (this.player.x + this.player.width) &&
            (this.enemy.x + this.enemy.width) > this.player.x &&
            this.enemy.y < (this.player.y + this.player.height) &&
            (this.enemy.y + this.enemy.height) > this.player.y)
    }

    // GAME START
    win() {
        clearInterval(this.gameTimer)
        alert('You Win')
    }

    lose() {
        clearInterval(this.gameTimer)
        alert('You Lose')
    }

    start() {
        this.initialize()

        this.gameTimer = setInterval(() => {
            this.player.movePlayer()
            this.enemy.followPlayer()
            if(this.checkCollisionPlayerEnemy()) this.lose()
            if (this.checkCollisionPlayerTreasure()) this.win()
            
        }, 20)
    }
}

const game = new Game()

