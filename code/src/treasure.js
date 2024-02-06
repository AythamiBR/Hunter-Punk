class Treasure {
    constructor(x, y, parent, player) {
        this.x = x
        this.y = y
        this.parent = parent
        this.player = player
        this.width = 70
        this.height = 70
    }

    insertTreasure() {
        let treasure = document.createElement('div')
        treasure.classList.add('treasure')
        treasure.style.top = this.y + 'px'
        treasure.style.left = this.x + 'px'
        this.parent.appendChild(treasure)
    }
    checkCollision(){
        if(this.x < this.player.x + this.player.width &&
           this.y < this.player.y + this.player.height &&
           this.x + this.width > this.player.x &&
           this.y + this.height > this.player.y )
            console.log('yujuuuuu')
    }
}