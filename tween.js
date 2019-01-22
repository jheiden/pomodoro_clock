
document.getElementById('btn').addEventListener('click', () => {
	const boxHeight = 60;
	const animationHeight = containerHeight() - boxHeight;
	TweenMax.staggerTo('.box', 2.5,  {y: animationHeight, ease:Bounce.easeOut}, 0.5);
});

const containerHeight = () => {
	return document.querySelector('.animation-area').clientHeight;
}