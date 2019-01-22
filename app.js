

let secondsToRun = 200;
const timerDefaultVal = 200;

const display = document.querySelector(".clock-h2");
const addMinutesBtn = document.querySelector(".li-plus");
const startBtn = document.querySelector(".play-img");
const stopBtn = document.querySelector(".stop-img");

// Will write separate eventlisteners and then refactor using bubbling / propagation

window.onload = displayTimerValue();

addMinutesBtn.addEventListener('click', (e) => {
   console.log(e.currentTarget);
});

startBtn.addEventListener('click', () => {
   startCount();
});

stopBtn.addEventListener('click', () => {
   stopAndReset();
});

function startCount () {
   interval = setInterval(countDown, 1000);
}

function countDown () {
   secondsToRun --;
   testIfStop(secondsToRun);
   displayTimerValue(secondsToRun);
}

function testIfStop() {
   if (secondsToRun === 0) {
      clearTimeout(interval) 
   }  
}

function stopAndReset() {
   secondsToRun = timerDefaultVal;
}


function displayTimerValue () {
   let convertedMinutes = Math.floor(secondsToRun / 60);
   let convertedSeconds = secondsToRun % 60;
   display.textContent = `${convertedMinutes}:${convertedSeconds}`
    
}

