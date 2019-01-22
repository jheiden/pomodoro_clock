
// ** QUOKKA SCRATCHPAD FILE 

let count = 0;
let timeToStop = 20;
let timerValueMs = 1000 
let startCount = setInterval(raiseCount, timerValueMs);
let display = document.querySelector(".clock-h2")


function raiseCount () {
   count += 1  
   evaluateCounter(count);
   displayTime(count)
   console.log(count);
}

function evaluateCounter(currentCount) {
   if (currentCount === timeToStop) {
      console.log("Time to stop!");
      clearTimeout(startCount) 
   }
}

function convertTime (ms) {
   let msToSeconds = ms / 1000;
   let msToMinutes = msToSeconds / 60; 
}

function displayTime (secondsToShow) {
   display.innerHTML = secondsToShow;
}



// ** QUOKKA SCRATCHPAD FILE 


// let timeToStop = 20;
// let startCount = setInterval(startCountDown, 1000);
// let display = document.querySelector(".clock-h2")


// function startCountDown () {
//    timeToStop --;
//    evaluateCounter(timeToStop);
//    displayTime(timeToStop);
// }

// function evaluateCounter(currentCount) {
//    if (currentCount === 0) {
//       clearTimeout(startCount) 
//    }
// }

// function convertTime () {
//    let msToMinutes = Math.floor(msToSeconds / 60); 
// }

// function displayTime () {
//    display.innerHTML = timeToStop;
// }

