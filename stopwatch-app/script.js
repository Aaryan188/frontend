let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let lapCount = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');
const container = document.querySelector('.container');

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStop() {
    if (isRunning) {
        clearInterval(timerInterval);
        startBtn.textContent = 'Start';
        startBtn.classList.remove('stop');
        lapBtn.textContent = 'Reset';
        container.classList.remove('running');
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        startBtn.textContent = 'Stop';
        startBtn.classList.add('stop');
        lapBtn.textContent = 'Lap';
        container.classList.add('running');
    }
    isRunning = !isRunning;
}

function lapReset() {
    if (isRunning) {
        lapCount++;
        const lapItem = document.createElement('li');
        lapItem.innerHTML = `<span>Lap ${lapCount}</span><span>${formatTime(elapsedTime)}</span>`;
        lapList.insertBefore(lapItem, lapList.firstChild);
    } else {
        elapsedTime = 0;
        updateDisplay();
        lapCount = 0;
        lapList.innerHTML = '';
        lapBtn.textContent = 'Lap';
    }
}

startBtn.addEventListener('click', startStop);
lapBtn.addEventListener('click', lapReset);

updateDisplay();
