

let timeToRun = 200;
const timerDefaultVal = 20;


const display = document.querySelector(".clock-h2");
const addMinutesBtn = document.querySelector(".li-plus");
const startBtn = document.querySelector(".play-img");
const stopBtn = document.querySelector(".stop-img");

addMinutesBtn.addEventListener('click', (e) => {
   console.log(e.currentTarget);
});

startBtn.addEventListener('click', () => {
   startCount();
});

stopBtn.addEventListener('click', () => {
   stopAndReset();

});

window.onload = displayTimerValue();

function startCount () {
   interval = setInterval(countDown, 1000);
}

function countDown () {
   timeToRun --;
   testIfStop(timeToRun);
   displayTimerValue(timeToRun);
}

function testIfStop() {
   if (timeToRun === 0) {
      clearTimeout(interval) 
   }  
}

function stopAndReset() {
   timeToRun = timerDefaultVal;

}

function convertTime (numberOfSeconds) {
   let msToMinutes = Math.floor(numberOfSeconds / 60); 
}

function displayTimerValue () {
   let displayValue = Math.floor(timeToRun / 60);
   display.innerHTML = displayValue;
}

