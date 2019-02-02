const display = document.querySelector(".timer");
const startBtn = document.querySelector("#js-play");
const stopBtn = document.querySelector("js-stop");

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
		//this.state === "worktime" ? this.state = "breaktime" : this.state ="worktime"
		if (this.state === "worktime") {
			this.state = "breaktime";
		} else {
			this.state = "worktime"
		}
	}

	setTimers () {
		if (this.state === "worktime") {
			this.minutes = 25;
			this.seconds = 0;
		} else {
			this.minutes = 5;
			this.seconds = 0;
		}
	}

};
	export default Stopwatch;

	// runTimer() {
	// //	display.textContent = this.formatTime();
	// 	if (this.seconds === 0) {
	// 		if (this.minutes !== 0) {
	// 			this.minutes -= 1;
	// 			this.seconds = 59;
	// 		} else {

	// 			if (this.state === 'worktime') {
	// 				this.state = 'breaktime';
	// 				this.minutes = 5;
	// 				this.seconds = 0;

	// 			} else {
	// 				this.state = 'worktime';
	// 				this.minutes = 25;
	// 				this.seconds = 0;
	// 			}

	// 			clearInterval(this.interval);
	// 			this.start();
	// 			// set new minutes / seconds for break
	// 			// change state
	// 		}
	// 	} else {
	// 		this.seconds -= 1;
	// 	}
	// }





// eslint-disable-next-line no-unused-vars
// const stopWatch = new Stopwatch();

// startBtn.addEventListener('click',() => {
// 	stopWatch.start();
// }); 
