console.log("hi")

function displayTime() {
    console.log('display time function working')
    seconds = '00';
    minutes = 1;
    time.textContent = `${minutes}:${seconds}`
}

function reduceTime() {
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
let seconds;
let minutes;
let isPaused = false;
const time = document.querySelector("#time-value");
const start = document.querySelector("#start-button")
const pause = document.querySelector("#pause-button");

displayTime();
start.addEventListener("click", () => {
    if(!isPaused){
    setInterval(reduceTime, 1000);
    }
});

pause.addEventListener("click", () => {
    console.log("pause working")
    isPaused = true;
    console.log(clearInterval(reduceTime));
});