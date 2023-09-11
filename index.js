let display = document.getElementById('display');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let timeIsRunning = false;
let count = 0;
let timerId;

// start button function:
function clickStart() {
    if (!timeIsRunning) {
        function timer() {
            count++;
            let min = String(Math.floor(count / 60)).padStart(2, '0');
            let sec = String(Math.floor(count % 60)).padStart(2, '0');
            display.textContent = `${min}:${sec}`;
        }
        timer();
        timerId = setInterval(timer, 1000);
        timeIsRunning = true;
        start.textContent = 'Pause';

    } else {
        clearInterval(timerId);
        timeIsRunning = false;
        start.textContent = 'Resume';
    }
};

// reset button function:
function clickReset() {
    count = 0;
    display.textContent = '00:00';
    clearInterval(timerId);
    timeIsRunning = false;
    start.textContent = 'Start';
};