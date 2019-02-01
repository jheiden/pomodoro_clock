import ClockAnimation from './animations.js';

class Pomodoro {
	constructor(root, startIdentifier, stopIdentifier) {
		if (!root) {
			throw new Error('Root cannot be null');
		}

		this.root = root;
		this.startIdentifier = startIdentifier;
		this.stopIdentifier = stopIdentifier;

		this.setupEventHandlers();
	}

	setupEventHandlers() {
		const startButton = this.root.querySelector(`.${this.startIdentifier}`);

		if (!startButton) {
			throw new Error('Button with StartIdentifier not found');
		}
		startButton.addEventListener('click', () => {
			Pomodoro.start();
		});

		const stopButton = this.root.querySelector(`.${this.stopIdentifier}`);
		if (!stopButton) {
			throw new Error('Button with StopIdentifier not found');
		}

		stopButton.addEventListener('click', () => {
			Pomodoro.stop();
		});
	}

	static start() {
		const anim = new ClockAnimation('animation-wrapper');
		anim.startAnimation();
	}

	static stop() {

	}
}

const pomo = new Pomodoro(document, 'js-start', 'js-stop');
pomo.start();
