/* const display = document.querySelector(".timer");
const startBtn = document.querySelector("#js-play");
const stopBtn = document.querySelector("js-stop");

<<<<<<< HEAD
=======
 */

>>>>>>> ebb980ee2fe958f8d7ddb6f63aa263e7c1702fa2
class Stopwatch {
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
		if (this.seconds === 0) {
			if (this.minutes !== 0) {
				this.minutes -= 1;
				this.seconds = 59;
			} else {
				if (this.state === 'worktime') {
					this.state = 'breaktime';
					this.minutes = 5;
					this.seconds = 0;
				} else {
					this.state = 'worktime';
					this.minutes = 25;
					this.seconds = 0;
				}

				clearInterval(this.interval);
				this.start();
				// set new minutes / seconds for break
				// change state
			}
		} else {
			this.seconds -= 1;
		}
	}
}

export default Stopwatch;
// eslint-disable-next-line no-unused-vars
const stopWatch = new Stopwatch();

<<<<<<< HEAD
startBtn.addEventListener('click',() => {
=======

/* startBtn.addEventListener('click',() => {
>>>>>>> ebb980ee2fe958f8d7ddb6f63aa263e7c1702fa2
	stopWatch.start();
}); */
