class Pista{
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
    }

    insertPista() {
        let treasure = document.createElement('div')
        treasure.classList.add('pista-trampa')
        treasure.style.top = this.y + 'px'
        treasure.style.left = this.x + 'px'
        this.parent.appendChild(treasure)
    }
}

class Trampa {
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
    }
    
    insertTrampa() {
        let treasure = document.createElement('div')
        treasure.classList.add('pista-trampa')
        treasure.style.top = this.y + 'px'
        treasure.style.left = this.x + 'px'
        this.parent.appendChild(treasure)
    }
}