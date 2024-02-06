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
        this.direction = 0
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
        this.x += this.speed * this.direction
        this.sprite.style.left = this.x + 'px'
    }

    verticalMove() {
        this.y += this.speed * this.direction
        this.sprite.style.top = this.y + 'px'
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
        // console.log(`X:${distanceX}`)
        // console.log(`Y:${distanceY}`)

        if ( distanceY < 0 ) {
            this.direction = -1
            this.verticalMove()
        } else if ( distanceY > 0 ) {
            this.direction = 1
            this.verticalMove()
        }
        
        if ( distanceX < 0 ) {
            this.direction = -1
            this.horizontalMove()
        } else if (distanceX > 0 ) {
            this.direction = 1
            this.horizontalMove()
        }
    }
}