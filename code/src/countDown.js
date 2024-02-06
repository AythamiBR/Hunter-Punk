class Timer {
    constructor( minutes ) {
        this.minutes = minutes
        this.seconds = minutes * 60
        this.timerId  
        this.htmlCountDown = document.getElementById('timer')
        this.htmlCountDown.innerText = `${this.minutes} : 00` 
    }

    countDown (){
        if (this.minutes >= 0 && this.seconds >= 1) {
            if (this.seconds % 60 === 0) this.minutes--
            this.seconds--
            this.htmlCountDown.innerText = `${this.minutes} : ${this.seconds % 60}`
            if (this.seconds % 60 < 10)
                this.htmlCountDown.innerText = `${this.minutes} : 0${this.seconds % 60}`
        } 
    }

    start () {
        this.timerId = setInterval(()=> this.countDown(),1000)
    }

    stop () { 
        clearInterval(this.timerId)     
    }
}