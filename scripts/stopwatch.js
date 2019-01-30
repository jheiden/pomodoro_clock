// TODO => start break 5 min after first work session 25 min and then back to work again.
class Stopwatch {
	// init: function .. ?
	constructor() {
		this.minutes = 25;
		this.seconds = 0;
		this.state = 'worktime';

		this.workLength = 5;
		this.breakLength = 3;
	
		// odd number = work , even number = break
		//this.state = 1;
		// UI
		/* 		this.display = document.querySelector('.timer');
		this.startBtn = document.querySelector('#js-play');
		this.stopBtn = document.querySelector('#js-stop');

		// TODO => disable button after clicked once.

		this.startBtn.addEventListener('click', () => {
			this.startCount();
		});

		this.stopBtn.addEventListener('click', () => {
			this.stopAndReset();
		}); */
	}

	formatTime() {
		const prefix = this.seconds > 9 ? '' : 0;
		return `${this.minutes}:${prefix}${this.seconds}`;
	}

	start() {
		this.interval = setInterval(() => this.runTimer(), 1000);
	}

	runTimer() {
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

export default Stopwatch;

// eslint-disable-next-line no-unused-vars
// const stopWatch = new Stopwatch();