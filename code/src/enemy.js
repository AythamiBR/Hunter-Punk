class Enemy {
    constructor(x, y, parent, player) {
        this.x = x
        this.y = y
        this.parent = parent
        this.player = player
        this.sprite
        this.speed = 3
        this.width = 50
        this.height = 50
        this.direction = 0
    }

    insertEnemy() {
        let enemy = document.createElement('div')
        enemy.classList.add('enemy')
        enemy.style.left = this.x + 'px'
        enemy.style.top = this.y + 'px'
        this.parent.appendChild(enemy)
        this.sprite = enemy
    }

    horizontalMove() {
        this.x += this.speed * this.direction
        this.sprite.style.left = this.x + 'px'
        this.checkCollision()
    }

    verticalMove() {
        this.y += this.speed * this.direction
        this.sprite.style.top = this.y + 'px'
        this.checkCollision()
    }

    calculateDistanceX() {
        let positionXPlayer = this.player.x
        let positionXEnemy = this.x
        return positionXPlayer - positionXEnemy
        // let distance = Math.sqrt(Math.pow(Math.abs(distanceX),2 ) + Math.pow(Math.abs(distanceY), 2 ))
    }

    calculateDistanceY() {
        let positionYPlayer = this.player.y
        let positionYEnemy = this.y
        return positionYPlayer - positionYEnemy

    }

    followPlayer() {
        let distanceY = this.calculateDistanceY()
        let distanceX = this.calculateDistanceX()
        let moveY = false
        let moveX = true

        if (distanceY < 0 && moveX) {
            this.direction = -1
            this.verticalMove()
            moveY = true
            moveX = false
        }
        if (distanceY > 0 && moveX) {
            this.direction = 1
            this.verticalMove()
            moveY = true
            moveX = false
        }

        if (distanceX < 0 && moveY) {
            this.direction = -1
            this.horizontalMove()
            moveY = false
            moveX = true
        }
        if (distanceX > 0 && moveY) {
            this.direction = 1
            this.horizontalMove()
            moveY = false
            moveX = true
        }
    }

    checkCollision() {
        if (this.x < (this.player.x + this.player.width) &&
            (this.x + this.width) > this.player.x &&
            this.y < (this.player.y + this.player.height) &&
            (this.y + this.height) > this.player.y) {
            console.log('Ouch!!')
        }
    }
}