class Treasure {
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
    }

    insertTreasure() {
        let treasure = document.createElement('div')
        treasure.classList.add('treasure')
        treasure.style.top = this.y + 'px'
        treasure.style.left = this.x + 'px'
        this.parent.appendChild(treasure)
    }
}