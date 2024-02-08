class Treasure {
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
        this.width = 70
        this.height = 70
        this.index = -1
        this.sprite
        this.colision = false
    }

    insertTreasure() {
        let treasure = document.createElement('div')
        treasure.classList.add('treasure')
        treasure.style.top = this.y + 'px'
        treasure.style.left = this.x + 'px'
        treasure.style.zIndex = this.index
        this.parent.appendChild(treasure)
        this.sprite = treasure
    }

    treasureFound() {
        this.sprite.classList.add('fade-in')
        this.index = 1
        this.sprite.style.zIndex = this.index
    }
}