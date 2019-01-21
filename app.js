
// ** QUOKKA SCRATCHPAD FILE 


let timeToStop = 20;
let startCount = setInterval(startCountDown, 1000);
let display = document.querySelector(".clock-h2")


function startCountDown () {
   timeToStop --;
   evaluateCounter(timeToStop);
   displayTime(timeToStop);
}

function evaluateCounter(currentCount) {
   if (currentCount === 0) {
      clearTimeout(startCount) 
   }
}

function convertTime () {
   let msToMinutes = Math.floor(msToSeconds / 60); 
}

function displayTime () {
   display.innerHTML = timeToStop;
}

