
// ** QUOKKA SCRATCHPAD FILE 

let timeToRun = 20;
let playing = false;
let paused = false;

// btn.addEventListener..fn () {} => trigger startCount
function startCount () {
  playing = true;
  paused = false;
  interval = setInterval(countDown, 1000); 
}

function pauseCount() {
   playing = false;
   paused = true;
}

function countDown () {
   timeToRun --;
   testIfStop(timeToRun);
   displayTime(timeToRun);
}

function testIfStop(currentCount) {
   if (currentCount === 0) {
      clearTimeout(interval);
   } else if (paused) {
     clearTimeout(interval); 
   }
}

function convertTime () {
   const msToMinutes = Math.floor(msToSeconds / 60); 
}

function displayTime () {
   console.log(timeToRun);
}

function changeTime () {

}

function resetTime () {


}

startCount()

let x = Math.random() 
console.log(x);