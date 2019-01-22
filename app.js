
 

let playing = false;
let paused = false;
let timeToRun = 20;
const timerDefaultVal = 20;

const display = document.querySelector(".clock-h2");
const addMinutesBtn = document.querySelector(".li-plus");
const startBtn = document.querySelector(".play-img");
const stopBtn = document.querySelector(".stop-img");

addMinutesBtn.addEventListener('click', (e) => {
   console.log(e.currentTarget);
});

startBtn.addEventListener('click', (e) => {
   startCount();
});

stopBtn.addEventListener('click', (e) => {
   stopAndReset();


});

function startCount () {
   paused = false;
   playing = true;
   interval = setInterval(countDown, 1000);
}

function countDown () {
   timeToRun --;
   testIfStop(timeToRun);
   displayTime(timeToRun);
}

function testIfStop(currentCount) {
   if (currentCount === 0) {
      clearTimeout(interval) 
   }  else if (paused) {
      clearTimeout(interval)
   }
}

function stopAndReset() {
   playing = false;
   paused = false;
   timeToRun = timerDefaultVal;

}

function convertTime () {
   let msToMinutes = Math.floor(msToSeconds / 60); 
}

function displayTime () {
   display.innerHTML = timeToRun;
}

