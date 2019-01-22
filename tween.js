
document.getElementById('js-play').addEventListener('click', () => {
	const boxHeight = 60;
	const animationHeight = containerHeight() - boxHeight;
	TweenMax.staggerTo('.box', 60,  {y: animationHeight, ease:Expo.easeOut}, 0.5);
});

document.getElementById('js-stop').addEventListener('click', () => {
	TweenMax.staggerTo('.box', 2,  {y: 0, ease:Expo.easeOut}, 0.1);
});

const containerHeight = () => {
	return document.querySelector('.animation-area').clientHeight;
}