/* eslint-disable no-undef */
class Animation {
	constructor() {
		this.boxIterations = 1;
		this.timer = 0;
		this.containerHeight = document.querySelector('.animation-wrapper').clientHeight;
	}

	static destroyAnimations() {
		const wrapper = document.querySelector('.animation-wrapper');
		wrapper.innerHTML = null;
	}

	resetWrapper = () => {
		const wrapper = document.querySelector('.animation-wrapper');
		wrapper.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
		this.boxIterations = 1;
	};

	countDown() {
		this.timer += 1;

		// animate every 10th seconds
		if (this.timer % 30 === 0) {
			this.animate();
		}

		if (this.timer === 60 * 25) {
			clearInterval(this.interval);
		}
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

	static generateRow(className, boxHeight, boxWidth, boxes) {
		const wrapper = document.querySelector('.animation-wrapper');
		const area = document.createElement('div');
		area.classList.add('animation-area');
		wrapper.append(area);
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

		const boxHeight = this.containerHeight / (25 * 2);

		const width = window.innerWidth;

		const boxWidth = width / 2 / (25 * 2);

		const boxes = Math.floor(width / boxWidth);

		this.generateRow(className, boxHeight, boxWidth, boxes);

		const animationHeight = this.containerHeight - boxHeight * this.boxIterations + boxHeight;
		const currentClass = `.${className}`;

		const elements = Array.from(document.querySelectorAll(currentClass));
		elements.sort(() => 0.5 - Math.random());

		TweenMax.staggerTo(
			elements,
			60,
			{ y: animationHeight, ease: this.getRandomAnimation() },
			0.5,
		);
		this.boxIterations += 1;
	}

	stopAnimation() {
		clearInterval(this.interval);
		TweenMax.staggerTo(
			'.animation-wrapper',
			0.5,
			{ y: -2000, ease: Expo.eastOut },
			0.1,
		);
		setTimeout(() => {
			this.destroyAnimations();
			this.resetWrapper();
		}, 500);
	}

	startAnimation() {
		this.interval = setInterval(this.countDown, 1000);
		this.animate();
	}
}

export default Animation;

/* eslint-disable no-undef */
/* let interval;
let boxIterations = 1;
let timer = 0;
const containerHeight = document.querySelector('.animation-wrapper').clientHeight;


const getRandomAnimation = () => {
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
};

const generateRow = (className, boxHeight, boxWidth, boxes) => {
	const wrapper = document.querySelector('.animation-wrapper');
	const area = document.createElement('div');
	area.classList.add('animation-area');
	wrapper.append(area);

	for (let index = 0; index < boxes; index += 1) {
		const div = document.createElement('div');
		div.style.height = `${boxHeight}px`;
		div.style.marginTop = `${-boxHeight}px`;
		div.style.backgroundColor = '#2D3B45';
		div.style.width = `${boxWidth}px`;
		div.classList.add(className);
		area.append(div);
	}
};

const animate = () => {
	const className = `box${boxIterations}`;

	const boxHeight = containerHeight / (25 * 2);

	const width = window.innerWidth;

	const boxWidth = width / 2 / (25 * 2);

	const boxes = Math.floor(width / boxWidth);

	generateRow(className, boxHeight, boxWidth, boxes);

	const animationHeight = containerHeight - boxHeight * boxIterations + boxHeight;
	const currentClass = `.${className}`;

	const elements = Array.from(document.querySelectorAll(currentClass));
	elements.sort(() => 0.5 - Math.random());

	TweenMax.staggerTo(
		elements,
		60,
		{ y: animationHeight, ease: getRandomAnimation() },
		0.5,
	);
	boxIterations += 1;
};

const destroyAnimations = () => {
	const wrapper = document.querySelector('.animation-wrapper');
	wrapper.innerHTML = null;
};

const resetWrapper = () => {
	const wrapper = document.querySelector('.animation-wrapper');
	wrapper.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	boxIterations = 1;
};

function countDown() {
	timer += 1;

	// animate every 10th seconds
	if (timer % 30 === 0) {
		animate();
	}

	if (timer === 60 * 25) {
		clearInterval(interval);
	}
}

document.getElementById('js-play').addEventListener('click', () => {
	interval = setInterval(countDown, 1000);
	animate();
});

document.getElementById('js-stop').addEventListener('click', () => {
	clearInterval(interval);
	TweenMax.staggerTo(
		'.animation-wrapper',
		0.5,
		{ y: -2000, ease: Expo.eastOut },
		0.1,
	);

	setTimeout(() => {
		destroyAnimations();
		resetWrapper();
	}, 500);
});
 */