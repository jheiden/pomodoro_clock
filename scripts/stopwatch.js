
class Stopwatch {
	constructor(isTest, displayClass) {
		this.minutes = 25;
		this.seconds = 0;
		this.state = 'worktime';
		this.isTest = isTest;
		if (!this.isTest) {
			this.display = document.querySelector(`.${displayClass}`);

			if (!this.display) {
				throw Error(`No matching display for ${displayClass}`);
			}
		}
	}

	formatTime() {
		const prefix = this.seconds > 9 ? '' : 0;
		return `${this.minutes}:${prefix}${this.seconds}`;
	}

	start() {
		this.interval = setInterval(() => this.runTimer(), 1000);
	}

	stop() {
		clearInterval(this.interval);
		this.state = 'worktime';
		this.setTimers();

		if (!this.isTest) {
			this.display.textContent = this.formatTime();
		}
	}

	runTimer() {
		if (this.seconds === 0) {
			if (this.minutes !== 0) {
				this.minutes -= 1;
				this.seconds = 59;
			}	else {
				this.setState();
				this.setTimers();
			}
		} else {
			this.seconds -= 1;
		}

		if (!this.isTest) {
			this.display.textContent = this.formatTime();
		}
	}

	setState() {
		this.state = this.state === 'worktime' ? 'breaktime' : 'worktime';
	}

	setTimers() {
		this.seconds = 0;
		this.minutes = this.state === 'worktime' ? 25 : 5;
	}
}

export default Stopwatch;
