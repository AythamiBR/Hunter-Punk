class Enemy {
    constructor(x, y, parent) {
        this.x = x
        this.y = y
        this.parent = parent
        this.sprite
        //this.speed = 3
        this.width = 50
        this.height = 50
    }

    insertEnemy() {
        let enemy = document.createElement('div')
        enemy.classList.add('enemy')
        enemy.style.left = this.x+ 'px'
        enemy.style.top = this.y + 'px'
        this.parent.appendChild(enemy)
        this.sprite = enemy
    }


}