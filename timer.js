
class Timer {

  // init: function .. ?
  constructor() {
     this._workLength = 1500;
     this._breakLength = 55;
     
     // UI
     this.display = document.querySelector(".timer")
     this.startBtn = document.querySelector("#js-play")
     this.stopBtn = document.querySelector("#js-stop")

     this.startBtn.addEventListener('click', (e) => {
        this.startCount();
     });

     this.stopBtn.addEventListener('click', (e) => {
        this.endTime();
     });
  }

     get workLength () {
        return this._workLength;
     }

     get breakLength () {
        return this._breakLength;
     }

     set workLength (newWorkLength) {
        this._workLength = newWorkLength;
     }

     set breakLength (newBreakLength) {
        this._breakLength = newBreakLength;
     }

     displayTime (newContent) {
        let convertedMinutes = Math.floor(this.workLength / 60);
        let convertedSeconds = this.workLength % 60;
        this.display.textContent = `${convertedMinutes}:${convertedSeconds}`
     };

     // Must use arrow function cause of scope of <this> when used for the setInterval..?
     startCount() {
        this.displayTime(this.workLength);
        this.interval = setInterval( () => { this.countDown() }, 1000);
      };

     countDown() {
        this.testIfStop();
        --this.workLength
        this.displayTime();
     };

     testIfStop() {
        if (this.workLength === 0) {
           this.endTime();
           // call to start Pause => how? would like to reuse the countDown method..
        }
     };

     // works like a pause function should we have a pause btn?
     endTime() {
       clearInterval(this.interval)

     }

};



new Timer();

