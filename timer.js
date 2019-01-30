// TODO => start break 5 min after first work session 25 min and then back to work again.
class Timer {
  // init: function .. ?

  // should we declare these variables as CONSTANTS?
  constructor() {
    this.workLength = 5;
    this.breakLength = 3;
    // odd number = work , even number = break
    this.state = 1;
    // UI
    this.display = document.querySelector(".timer");
    this.startBtn = document.querySelector("#js-play");
    this.stopBtn = document.querySelector("#js-stop");

    // TODO => disable button after clicked once.

    this.startBtn.addEventListener("click", e => {
      this.startCount();
      this.startBtn.setAttribute('disabled', 'disabled');

    });

    this.stopBtn.addEventListener("click", e => {
      this.stopAndReset();
    });
  }


  // Must use arrow function cause of scope of <this> when used for the setInterval..?
  startCount() {
    this.interval = setInterval(() => {
      this.countDown();
    }, 1000);
  }

  countDown() {
    if (this.hasEnded()) {
      this.endTime();
      this.incrementState();
      this.resetTimers();
      this.startCount()
    } else {
      this.checkState()
  
    }
  };

  checkState() {
    if (this.state % 2 !== 0) {
      this.workLength --;
      this.displayTime(this.workLength);
    } else {
      this.breakLength --;
      this.displayTime(this.breakLength);
    }
  };

  displayTime(timeToTick) {
    let convertedMinutes = Math.floor(timeToTick / 60);
    let convertedSeconds = timeToTick % 60;
    const prefix = convertedSeconds > 9 ? "" : 0;
    this.display.textContent = `${convertedMinutes}:${prefix}${convertedSeconds}`;
  }

  hasEnded() {
    return !this.workLength;
  }

  endTime() {
    clearInterval(this.interval);
  }

  incrementState() {
    this.state ++;
  }

  resetTimers() {
    this.workLength = 5;
    this.breakLength = 3;
  }

};

new Timer();
