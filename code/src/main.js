const map = document.getElementById('map') //MAPA

class Game {
    constructor() {
        this.player = new Player(0, 0, map)
        this.enemy = new Enemy(600, 600, map, this.player)
        this.treasure = new Treasure(Math.floor(Math.random() * (1110 - 300) + 300), Math.floor(Math.random() * (700 -300) + 300), map)
        this.cheat1 = new Cheat(Math.floor(Math.random() * 1110), Math.floor(Math.random() * 700), map)
        this.cheat2 = new Cheat(Math.floor(Math.random() * 1110), Math.floor(Math.random() * 700), map)
        this.gameTimer = null
        this.countDown
        this.life = new Lives(this.player.lives, document.getElementById('lives-wrapper'))
        this.compass = new Compass(this.player, this.treasure)
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
                    this.player.sprite.style.backgroundImage = "url('./assets/playeLeft.png')"
                    break
                case 'd':
                case 'D':
                case 'ArrowRight':
                    this.player.directionX = 1
                    this.player.sprite.style.backgroundImage = "url('./assets/player.png')"
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
        this.countDown = new Timer(1)
        this.bindKeys()
        this.player.insertPlayer()
        this.enemy.insertEnemy()
        this.treasure.insertTreasure()
        this.cheat1.insertCheat()
        this.cheat2.insertCheat()
        this.countDown.start()
        this.life.insertLives()
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

    checkCollisionPlayerCheat1() {
        return (this.cheat1.x < (this.player.x + this.player.width) &&
            (this.cheat1.x + this.cheat1.width) > this.player.x &&
            this.cheat1.y < (this.player.y + this.player.height) &&
            (this.cheat1.y + this.cheat1.height) > this.player.y)
    }

    checkCollisionPlayerCheat2() {
        return (this.cheat2.x < (this.player.x + this.player.width) &&
            (this.cheat2.x + this.cheat2.width) > this.player.x &&
            this.cheat2.y < (this.player.y + this.player.height) &&
            (this.cheat2.y + this.cheat2.height) > this.player.y)
    }

    // GAME START
    win() {
        const winScreen = document.getElementById('winScreen')
        clearInterval(this.gameTimer)
        this.stopGame()
        this.countDown.stop()
        winScreen.removeAttribute('class','hidden')
    }

    lose() {
        const gameOverScreen = document.getElementById('gameOverScreen')
        clearInterval(this.gameTimer)
        this.stopGame()
        this.countDown.stop()
        gameOverScreen.classList.remove('hidden')
    }

    reset(){
        this.player = new Player(0, 0, map)
        this.player.lives = 3
        this.life.numsLifes = 3

        this.life = new Lives(this.player.lives, document.getElementById('lives-wrapper'))
        this.enemy = new Enemy(600, 600, map, this.player)
        this.treasure = new Treasure(Math.floor(Math.random() * 1110), Math.floor(Math.random() * 700), map)
        this.cheat1 = new Cheat(Math.floor(Math.random() * 1110), Math.floor(Math.random() * 700), map)
        this.cheat2 = new Cheat(Math.floor(Math.random() * 1110), Math.floor(Math.random() * 700), map)
        this.countDown = new Timer(1)
        this.compass = new Compass(this.player, this.treasure)
        this.player.insertPlayer()
        this.enemy.insertEnemy()
        this.treasure.insertTreasure()
        this.cheat1.insertCheat()
        this.cheat2.insertCheat()
        this.life.insertLives()
        this.countDown.start()
        this.start() 

    }

    start() {
        map.classList.remove('hidden')
        this.gameTimer = setInterval(() => {
            this.compass.changeColor()

            if (!this.enemy.pause) this.enemy.followPlayer()
            if(!this.enemy.pause && this.checkCollisionPlayerEnemy()) {
                this.player.removeLife()
                this.life.removeLives()
                if (this.player.lives === 0) {
                    this.lose()
                } else {
                    this.enemy.pause = true
                    setTimeout(() => {
                        this.enemy.pause = false
                    }, 1000)
                }
            }
            if (!this.player.pause) this.player.movePlayer()
            if(!this.player.pause && this.checkCollisionPlayerCheat1() || !this.player.pause && this.checkCollisionPlayerCheat2()) {
                this.player.pause = true
                setTimeout(() => {
                    this.player.pause = false
                }, 250)
            }
            if (this.checkCollisionPlayerTreasure()) this.win()
            if(this.countDown.minutes === 0 && this.countDown.seconds === 0) this.lose()
            
        }, 20)
    }
    stopGame(){
        let player = document.getElementById('player')
        let enemies = document.getElementsByClassName('enemy')
        let treasure = document.getElementsByClassName('treasure')
        let cheat = document.getElementsByClassName('cheat')
        let lives = document.getElementsByClassName('heart')
        let wrapper = document.getElementById('lives-wrapper')
        this.player.lives = 0
        this.life.numsLifes = 0
        enemies = [...enemies]
        cheat = [...cheat]
        treasure = [...treasure]
        lives = [...lives]
        enemies.forEach(enemy => map.removeChild(enemy))
        cheat.forEach(element => map.removeChild(element))
        treasure.forEach(element => map.removeChild(element))
        lives.forEach(element => wrapper.removeChild(element))
        map.removeChild(player)
        map.classList.add('hidden')
    }
}

const game = new Game()