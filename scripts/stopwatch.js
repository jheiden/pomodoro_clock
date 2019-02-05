const display = document.querySelector(".timer");
const startBtn = document.querySelector("#js-play");
const stopBtn = document.querySelector("#js-stop");

class Stopwatch {
	constructor(displayClass, startBtnId, stopBtnId) {
		this.minutes = 25;
		this.seconds = 0;
		this.state = 'worktime';
		this.display = document.querySelector(`.${displayClass}`)
		this.startBtn = document.querySelector(`#${startBtnId}`)
		this.stopBtn = document.querySelector(`#${stopBtnId}`)
	}

	formatTime() {
		const prefix = this.seconds > 9 ? '' : 0;
		return `${this.minutes}:${prefix}${this.seconds}`;
	}

	start() {
		this.interval = setInterval(() => this.runTimer(), 1000);
	}

	runTimer() {
		this.display.textContent = this.formatTime();
		if (this.seconds === 0) {
			if (this.minutes !== 0) {
				this.minutes -= 1
				this.seconds = 59;
			}	else {
				this.setState();
				this.setTimers();
			}
				clearInterval(this.interval);
				this.start();
			} else {
				this.seconds -= 1;
			}
	}

	setState() {
		this.state === "worktime" ? this.state = "breaktime" : this.state = "worktime"
	}

	setTimers () {
		this.seconds = 0;
		this.state === "worktime" ? this.minutes = 25 : this.minutes = 5;
	}

	stopAndReset() {
		clearInterval(this.interval)
		this.state === "worktime"
		this.setTimers();
		this.display.textContent = this.formatTime();
	}

};

//export default Stopwatch;

const stopWatch = new Stopwatch("timer");

startBtn.addEventListener('click',() => {
	stopWatch.start();
}); 

stopBtn.addEventListener('click', () => {
	stopWatch.stopAndReset();
})

// eslint-disable-next-line no-unused-vars
