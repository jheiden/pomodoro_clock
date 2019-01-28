class Timer {
  // init: function .. ?
  constructor() {
    this.workLength = 1500;
    this.breakLength = 55;

    // UI
    this.display = document.querySelector(".timer");
    this.startBtn = document.querySelector("#js-play");
    this.stopBtn = document.querySelector("#js-stop");

    this.startBtn.addEventListener("click", e => {
      this.startCount();
    });

    this.stopBtn.addEventListener("click", e => {
      this.display.textContent = "test";
    });
  }
  displayTime() {
    let convertedMinutes = Math.floor(this.workLength / 60);
    let convertedSeconds = this.workLength % 60;
    this.display.textContent = `${convertedMinutes}:${convertedSeconds}`;
  }

  // Must use arrow function cause of scope of <this> when used for the setInterval..?
  startCount() {
    this.displayTime();
    this.interval = setInterval(() => {
      this.countDown();
    }, 1000);
  }

  countDown() {
    if (this.hasEnded()) {
      this.endTime();
    }

    this.workLength--;
    this.displayTime();
  }

  hasEnded() {
    return !this.workLength;
  }

  endTime() {
    clearInterval(this.interval);
  }
}

new Timer();
