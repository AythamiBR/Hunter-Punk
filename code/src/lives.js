class Lives {
    constructor(num, parent) {
        this.numsLifes = num
        this.parent = parent
        this.sprite
        this.lives = []
    }

    insertLives() {
        for (let i = 0; i < this.numsLifes; i++) {
            let heart = document.createElement('div')
            heart.classList.add('heart')
            this.parent.appendChild(heart)
            this.sprite = heart
            this.lives.push(this.sprite)
        }
    }

    removeLives() {
        if (this.lives.length > 0) {
            this.lives.pop()
            this.parent.removeChild(this.parent.lastChild)
        }
    }
}