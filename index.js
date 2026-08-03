console.log("hi")

function displayTime() {
    console.log('display time function working')
    seconds = '00';
    minutes = 1;
    time.textContent = `${minutes}:${seconds}`
}

function reduceTime() {
    if(!isPaused){
        console.log("Start time working");
        if (minutes === 0 && seconds === 0) {
            return
        }

        if (seconds =='00') {
            seconds = 59;
            minutes -=1;
        }
        else {
            seconds -=1
        }

        if(seconds < 10) {
            time.textContent = `${minutes}:0${seconds}`;
        }
        else {
            time.textContent = `${minutes}:${seconds}`;
        }

    }
    
}
let seconds;
let minutes;
let isPaused = false;
let timerInterval = null;
const time = document.querySelector("#time-value");
const start = document.querySelector("#start-button")
const pause = document.querySelector("#pause-button");
const reset = document.querySelector("#reset-button");


displayTime();
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
    displayTime();
})