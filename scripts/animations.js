/* eslint-disable func-names */
/* eslint-disable no-undef */
class ClockAnimation {
	constructor(container) {
		this.boxIterations = 1;
		this.timer = 0;
		this.containerClass = container;
		this.container = document.querySelector(`.${container}`);

		if (!this.container) {
			throw new Error('Container not found');
		}

		this.setContainerStyles();
	}

	setContainerStyles() {
		this.container.style.position = 'absolute';
		this.container.style.display = 'flex';
		this.container.style.flexDirection = 'column';
		this.container.style.height = '100%';
		this.container.style.width = '1200px';
	}

	destroyAnimations() {
		while (this.container.firstChild) {
			this.container.removeChild(this.container.firstChild);
		}
	}

	resetWrapper() {
		this.container.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
		this.boxIterations = 1;
	}

	countDown() {
		this.timer += 1;

		// animate every 10th seconds
		if (this.timer % 30 === 0) {
			this.animate();
		}

		if (this.timer === 60 * 25) {
			clearInterval(this.interval);
			setTimeout(function () {
				// sleep 5 minutes while breaktime
				this.reset();
			}, 50000);
		}
	}

	reset() {
		this.destroyAnimations();
		this.resetWrapper();
		this.boxIterations = 1;
		this.timer = 0;
		this.startAnimation();
	}

	static getRandomAnimation() {
		const num = Math.floor(Math.random() * 6);

		switch (num) {
		case 1:
			return 'Expo.easeOut';
		case 2:
			return 'Bounce.easeOut';
		case 3:
			return 'Power0.easeOut';
		case 4:
			return 'Power1.easeOut';
		case 5:
			return 'Power2.easeOut';
		default:
			return 'Expo.easeOut';
		}
	}

	generateRow(className, boxHeight, boxWidth, boxes) {
		const area = document.createElement('div');
		area.style.position = 'absolute';
		area.style.top = 0;
		area.style.display = 'flex';
		area.style.flexDirection = 'row';
		area.style.height = '60px';
		area.style.width = '1200px';

		this.container.append(area);
		for (let index = 0; index < boxes; index += 1) {
			const div = document.createElement('div');
			div.style.height = `${boxHeight}px`;
			div.style.marginTop = `${-boxHeight}px`;
			div.style.backgroundColor = '#2D3B45';
			div.style.width = `${boxWidth}px`;
			div.classList.add(className);
			area.append(div);
		}
	}

	animate() {
		const className = `box${this.boxIterations}`;

		const boxHeight = this.container.clientHeight / (25 * 2);

		const width = window.innerWidth;

		const boxWidth = width / 2 / (25 * 2);

		const boxes = Math.floor(width / boxWidth);

		this.generateRow(className, boxHeight, boxWidth, boxes);

		const animationHeight = this.container.clientHeight - boxHeight
		* this.boxIterations + boxHeight;
		const currentClass = `.${className}`;

		const elements = Array.from(this.container.querySelectorAll(currentClass));
		elements.sort(() => 0.5 - Math.random());

		TweenMax.staggerTo(
			elements,
			60,
			{ y: animationHeight, ease: ClockAnimation.getRandomAnimation() },
			0.5,
		);
		this.boxIterations += 1;
	}

	stopAnimation() {
		clearInterval(this.interval);
		TweenMax.staggerTo(
			`.${this.containerClass}`,
			0.5,
			{ y: -2000, ease: Expo.eastOut },
			0.1,
		);
		setTimeout(function () {
			this.destroyAnimations();
			this.resetWrapper();
			this.boxIterations = 1;
			this.timer = 0;
		}, 500);
	}

	startAnimation() {
		this.interval = setInterval(function () {
			this.countDown();
		}, 1000);
		this.animate();
	}
}

export default ClockAnimation;
