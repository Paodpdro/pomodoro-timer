console.log("hi")

function displayTime(minutes, seconds) {
    console.log('display time function working')
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
            if(!isOnBreak) {
                breakTime();
            }
            else {
                resetTime();
            }
        }
        if (seconds === 0) {
            seconds = 60;
            minutes --;
        }
        seconds--;

        displayTime(minutes, seconds);
        
}

function resetTime() {
    console.log("resetTime working")
    if(isOnBreak) {
        clearInterval(timerInterval);
        timerInterval=null;
        seconds = 0;
        minutes = 5;
        displayTime(minutes, seconds);      
        
    }
    else { 
        clearInterval(timerInterval);
        timerInterval=null;
        isOnBreak = false;
        seconds = 0;
        minutes = 25;
        displayTime(minutes, seconds);
    }

}

function breakTime() {
    if(minutes === 0 && seconds === 0) {
        isOnBreak = false;
        resetTime();
    }
    console.log("breakTime working")
    minutes = 1;
    seconds = 0;
    isOnBreak = true;
    displayTime(minutes, seconds);
}

let seconds = 0;
let minutes = 1;
let isPaused = false;
let timerInterval = null;
let isOnBreak = false;
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

reset.addEventListener("click", resetTime);