// TODO => start break 5 min after first work session 25 min and then back to work again.
class Timer {
	// init: function .. ?
	constructor() {
		this.workLength = 5;
		this.breakLength = 3;
		debugger;
		// odd number = work , even number = break
		this.state = 1;
		// UI
		this.display = document.querySelector('.timer');
		this.startBtn = document.querySelector('#js-play');
		this.stopBtn = document.querySelector('#js-stop');

		// TODO => disable button after clicked once.

		this.startBtn.addEventListener('click', () => {
			this.startCount();
		});

		this.stopBtn.addEventListener('click', () => {
			this.stopAndReset();
		});
	}

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

const stopWatch = new Timer();
