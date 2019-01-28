
class Timer {

   // init: function .. ?
   constructor() {
      this._workLength = 1500;
      this._breakLength = 55;
      
      // UI
      this.display = document.querySelector(".clock-h2")
      this.startBtn = document.querySelector(".play-img")
      this.stopBtn = document.querySelector(".stop-img")

      this.startBtn.addEventListener('click', (e) => {
         this.startCount();
      });

      this.stopBtn.addEventListener('click', (e) => {
         this.display.textContent = "test";
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
      }

      // Must use arrow function cause of scope of <this> when used for the setInterval..?
      startCount() {
         this.displayTime(this.workLength);
         this.interval = setInterval( () => { this.countDown() }, 1000);
       };

      countDown() {
         this.displayTime(--this.workLength);
         this.testIfStop();
         console.log(this.workLength);
      }

      testIfStop() {
         if (this.workLength === 20) {
            clearTimeout(this.interval);
            // call to start Pause => how? would like to reuse the countDown method..
         }
         
      }

};



new Timer();






// let secondsToRun = 200;
// const timerDefaultVal = 200;

// // **TODO** refactor and use bubbling and listen to the containing parent element.
// const display = document.querySelector(".clock-h2");
// const addMinutesBtn = document.querySelector(".li-plus");
// const startBtn = document.querySelector(".play-img");
// const stopBtn = document.querySelector(".stop-img");


// window.onload = displayTimerValue();

// addMinutesBtn.addEventListener('click', (e) => {
//    console.log(e.currentTarget);
// });

// startBtn.addEventListener('click', () => {
//    startCount();
// });

// stopBtn.addEventListener('click', () => {
//    stopAndReset();
// });

// function startCount () {
//    interval = setInterval(countDown, 1000);
// }

// function countDown () {
//    secondsToRun --;
//    testIfStop(secondsToRun);
//    displayTimerValue(secondsToRun);
// }

// function testIfStop() {
//    if (secondsToRun === 0) {
//       clearTimeout(interval) 
//    }  
// }

// function stopAndReset() {
//    secondsToRun = timerDefaultVal;
// }


// function displayTimerValue () {
//    let convertedMinutes = Math.floor(secondsToRun / 60);
//    let convertedSeconds = secondsToRun % 60;
//    display.textContent = `${convertedMinutes}:${convertedSeconds}`
    
// }

