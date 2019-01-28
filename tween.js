
document.getElementById('js-play').addEventListener('click', () => {
	interval = setInterval(countDown, 1000);
	animate();
});

document.getElementById('js-stop').addEventListener('click', () => {
	clearInterval(interval);
	TweenMax.staggerTo('.animation-wrapper', .5,  {y: -2000, ease:Expo.eastOut}, 0.1);

	setTimeout(() => {
		destroyAnimations();
		resetWrapper();
	}, 500);	
});

const containerHeight = document.querySelector('.animation-wrapper').clientHeight;


let boxIterations = 1;
let timer = 0;

const generateRow = (className, boxHeight, boxWidth, boxes) => {
	const wrapper = document.querySelector('.animation-wrapper');
	const area = document.createElement('div');
	area.classList.add('animation-area');
	wrapper.append(area);

	for (let index = 0; index < boxes; index++) {
		const div = document.createElement('div');
		div.style.height = boxHeight + 'px';
		div.style.marginTop = -boxHeight + 'px';
		div.style.backgroundColor = "#2D3B45";
		div.style.width = boxWidth + 'px';
		div.classList.add(className);
		area.append(div);
	}
}

const animate = () => {
	const className = 'box' + boxIterations;


	const boxHeight = containerHeight / (25 * 2);

	const width =	window.innerWidth;

	const boxWidth = (width / 2) / (25 * 2);

	const boxes = Math.floor(width / boxWidth);

	generateRow(className, boxHeight, boxWidth, boxes);

	const animationHeight = containerHeight - (boxHeight * boxIterations) + boxHeight;
	const currentClass = '.' + className;

	const elements = Array.from(document.querySelectorAll(currentClass));
	elements.sort(function(){return 0.5-Math.random()});

	TweenMax.staggerTo(elements, 60,  {y: animationHeight, ease: getRandomAnimation()}, 0.5);
	boxIterations++;
}

const destroyAnimations = () => {
	const wrapper = document.querySelector('.animation-wrapper');
	wrapper.innerHTML = null;
}

const resetWrapper = () => {
	const wrapper = document.querySelector('.animation-wrapper');
	wrapper.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	boxIterations = 1;
}

const getRandomAnimation = () => {
	 const num = Math.floor(Math.random() * 6);

	 console.log('num', num);

	 switch(num) {
		 case 1: return 'Expo.easeOut';
		 case 2: return 'Bounce.easeOut';
		 case 3: return 'Power0.easeOut';
		 case 4: return 'Power1.easeOut';
		 case 5: return 'Power2.easeOut';
	 }
}

function countDown () {

	timer++;

		// animate every 10th seconds
	if (timer % 30 === 0) {
		animate();
	}

	if (timer === 60 * 25) {
		clearInterval(interval);
	}


}

