class Compass {
    constructor(player, treasure) {
        this.player = player
        this.treasure = treasure
        this.sprite = document.getElementById('compass-color')
        this.distance
    }

    calculateDistance() {
        let distanceX = this.player.x - this.treasure.x
        let distanceY = this.player.y - this.treasure.y
        this.distance = parseInt(Math.sqrt(Math.pow(Math.abs(distanceX), 2) + Math.pow(Math.abs(distanceY), 2)))
        console.log(this.distance)
    }

    changeColor() {
        this.calculateDistance()
        if (this.distance >= 600) this.sprite.style.backgroundColor = 'blue'
        else if (this.distance <= 400 && this.distance >= 250) this.sprite.style.backgroundColor = 'orange'
        else if (this.distance < 150) {
            this.sprite.style.backgroundColor = 'red'
            this.treasure.treasureFound()
        }
    }
}