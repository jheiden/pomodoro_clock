

const display = document.querySelector(".timer")
const startBtn = document.querySelector("#js-play")
const stopBtn = document.querySelector("js-stop")

startBtn.addEventListener('click',() => {
	stopWatch.start();
});


class Stopwatch {
	// init: function .. ?
	constructor() {
		this.minutes = 25;
		this.seconds = 0;
		this.state = 'worktime';
	}

	formatTime() {
		const prefix = this.seconds > 9 ? '' : 0;
		return `${this.minutes}:${prefix}${this.seconds}`;
	}

	start() {
		this.interval = setInterval(() => this.runTimer(), 1000);
	}


	runTimer() {
		console.log("runTimer");
		if (this.seconds === 0) {
			if (this.minutes !== 0) {
				this.minutes -= 1;
				this.seconds = 59;
			} else {
				// 25 min is up
				// reset interval
				clearInterval(this.interval);
				// set new minutes / seconds for break
				// change state
			}
		} else {
			this.seconds -= 1;
		}
	}
	/* refactoring some code so it aligns with tests */

	displayTime(timeToTick) {
		const convertedMinutes = Math.floor(timeToTick / 60);
		const convertedSeconds = timeToTick % 60;
		const prefix = convertedSeconds > 9 ? '' : 0;
		this.display.textContent = `${convertedMinutes}:${prefix}${convertedSeconds}`;
	}



	countDown() {
		if (this.hasEnded()) {
			this.endTime();
			this.incrementState();
			this.resetTimers();
			this.startCount();
		} else {
			this.checkState();
		}
	}

	checkState() {
		if (this.state % 2 !== 0) {
			this.workLength -= 1;
			this.displayTime(this.workLength);
		} else {
			this.breakLength -= 1;
			this.displayTime(this.breakLength);
		}
	}

	hasEnded() {
		return !this.workLength;
	}

	endTime() {
		clearInterval(this.interval);
	}

	incrementState() {
		this.state += 1;
	}

	resetTimers() {
		this.workLength = 5;
		this.breakLength = 3;
	}
}

// export default Stopwatch;

// eslint-disable-next-line no-unused-vars
const stopWatch = new Stopwatch();