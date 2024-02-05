class Player { //PROPIEDADES DEL JUGADOR
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
        this.directionX = 0
        this.directionY = 0
        this.width = 50
        this.height = 50
        this.speed = 5
        this.sprite
        this.timerId
        //this.isDead = false
    }

    insertPlayer() { //CREA E INSERTA AL JUGADOR EN EL DOM
        let player = document.createElement('div')
        player.setAttribute('id', 'player')
        player.style.top = this.y + 'px'
        player.style.left = this.x + 'px'
        this.parent.appendChild(player)
        this.sprite = player //le asignamos el player a la variable sprite para poder usarla más abajo
     
    }

    movePlayer() { //MECANICA DEL MOVIMIENTO
        let nextX = this.x + this.speed * this.directionX
        let nextY = this.y + this.speed * this.directionY
        if (nextX >= 0 && nextX <= 1110 && nextY >= 0 && nextY <= 700) {
            this.x += this.speed * this.directionX //actualizamos la x
            this.sprite.style.left = this.x + 'px' //la cambiamos en el DOM
            this.y += this.speed * this.directionY
            this.sprite.style.top = this.y + 'px'
        }
    }
}