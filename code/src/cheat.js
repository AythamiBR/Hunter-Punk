class Cheat { //trampa
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.width = 60
        this.height = 100
        this.parent = parent
    }
    
    insertCheat() {
        let cheat = document.createElement('div')
        cheat.classList.add('cheat')
        cheat.style.top = this.y + 'px'
        cheat.style.left = this.x + 'px'
        this.parent.appendChild(cheat)
    }
}