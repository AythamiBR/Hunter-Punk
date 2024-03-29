class Player { //PROPIEDADES DEL JUGADOR
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
        this.directionX = 0
        this.directionY = 0
        this.width = 87
        this.height = 100
        this.speed = 5
        this.sprite
        this.timerId
        this.lives = 3
        this.pause = false
    }

    insertPlayer() { 
        let player = document.createElement('div')
        player.setAttribute('id', 'player')
        player.style.top = this.y + 'px'
        player.style.left = this.x + 'px'
        this.parent.appendChild(player)
        this.sprite = player //le asignamos el player a la variable sprite para poder usarla más abajo
     
    }

    movePlayer() { 
        let nextX = this.x + this.speed * this.directionX
        let nextY = this.y + this.speed * this.directionY
        if (nextX >= 0 && nextX <= 1110 && nextY >= 0 && nextY <= 700) {
            this.x += this.speed * this.directionX 
            this.sprite.style.left = this.x + 'px' 
            this.y += this.speed * this.directionY
            this.sprite.style.top = this.y + 'px'
        }
    }

    removeLife() {
        this.lives--
    }
}