console.log("hi")

function displayTime(minutes, seconds) {
    console.log('display time function working')
    // seconds = '00';
    // minutes = 1;
    // time.textContent = `${minutes}:${seconds}`
    if(seconds < 10) {
            time.textContent = `${minutes}:0${seconds}`;
        }
        else {
            time.textContent = `${minutes}:${seconds}`;
        }
}

function reduceTime() {
        console.log("Start time working");
        if (minutes === 0 && seconds === 0) {
            return
        }
        if (seconds === 0) {
            seconds = 60;
            minutes --;
        }
        seconds--;

        displayTime(minutes, seconds);
        

    
    
}
let seconds = 0;
let minutes = 25;
let isPaused = false;
let timerInterval = null;
const time = document.querySelector("#time-value");
const circle = document.querySelector("#circle-container");
const start = document.querySelector("#start-button")
const pause = document.querySelector("#pause-button");
const reset = document.querySelector("#reset-button");


displayTime(minutes, seconds);
start.addEventListener("click", () => {
    if(timerInterval !== null) {
        return
    }
    isPaused=false;
    console.log("reduceTime working")
    timerInterval = setInterval(reduceTime, 1000);
});

pause.addEventListener("click", () => {
    console.log("pause working")
    isPaused = true;
    clearInterval(timerInterval);
    timerInterval = null
});

reset.addEventListener("click", () =>  {
    clearInterval(timerInterval);
    timerInterval=null;
    seconds = 0;
    minutes = 25;
    displayTime(25, 0);
})