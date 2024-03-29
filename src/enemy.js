class Enemy {
    constructor(x, y, parent, player) {
        this.x = x
        this.y = y
        this.parent = parent
        this.player = player
        this.sprite
        this.speed = 2
        this.width = 67
        this.height = 110
        this.directionX = 0
        this.directionY = 0
        this.pause = false
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
        this.x += this.speed * this.directionX
        this.sprite.style.left = this.x + 'px'
    }

    verticalMove() {
        this.y += this.speed * this.directionY
        this.sprite.style.top = this.y + 'px'
    }

    calculateDistanceX() {
        let positionXPlayer = this.player.x
        let positionXEnemy = this.x
        return positionXPlayer - positionXEnemy
    }

    calculateDistanceY() {
        let positionYPlayer = this.player.y
        let positionYEnemy = this.y
        return positionYPlayer - positionYEnemy

    }

    followPlayer() {
        let distanceY = this.calculateDistanceY()
        let distanceX = this.calculateDistanceX()
        if ( distanceY < 0 ) {
            this.directionY = -1
            this.verticalMove()
        } else if ( distanceY > 0 ) {
            this.directionY = 1
            this.verticalMove()
        }
        if ( distanceX < 0 ) {
            this.directionX = -1
            this.horizontalMove()
        } else if (distanceX > 0 ) {
            this.directionX = 1
            this.horizontalMove()
        }
    }
}