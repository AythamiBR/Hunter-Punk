class Clue{ //pista
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
    }

    insertClue() {
        let treasure = document.createElement('div')
        treasure.classList.add('clue-cheat')
        treasure.style.top = this.y + 'px'
        treasure.style.left = this.x + 'px'
        this.parent.appendChild(treasure)
    }
}

class Cheat { //trampa
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
    }
    
    insertCheat() {
        let treasure = document.createElement('div')
        treasure.classList.add('clue-cheat')
        treasure.style.top = this.y + 'px'
        treasure.style.left = this.x + 'px'
        this.parent.appendChild(treasure)
    }
}