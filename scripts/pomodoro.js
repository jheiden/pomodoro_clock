/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import ClockAnimation from './animations.js';
import Stopwatch from './Stopwatch.js';

class Pomodoro {
	constructor(root, startIdentifier, stopIdentifier, displayIdentifier) {
		if (!root) {
			throw new Error('Root cannot be null');
		}

		this.root = root;
		this.clockAnimation = new ClockAnimation('animation-wrapper');
		this.stopWatch = new Stopwatch(false, displayIdentifier);
		this.startIdentifier = startIdentifier;
		this.stopIdentifier = stopIdentifier;

		this.setupEventHandlers();
	}

	setupEventHandlers() {
		const startButton = this.root.querySelector(`#${this.startIdentifier}`);

		if (!startButton) {
			throw new Error('Button with StartIdentifier not found');
		}
		startButton.addEventListener('click', () => {
			this.clockAnimation.startAnimation();
			this.stopWatch.start();
		});

		const stopButton = this.root.querySelector(`#${this.stopIdentifier}`);
		if (!stopButton) {
			throw new Error('Button with StopIdentifier not found');
		}

		stopButton.addEventListener('click', () => {
			this.clockAnimation.stopAnimation();
			this.stopWatch.stop();
		});
	}
}

// eslint-disable-next-line no-unused-vars
const pomo = new Pomodoro(document, 'js-play', 'js-stop', 'timer');
