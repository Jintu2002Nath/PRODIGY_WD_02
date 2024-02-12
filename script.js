let startTime;
let isRunning = false;
let laps = [];
let lapsContainer = document.getElementById('laps');
let display = document.getElementById('display');

function startStop() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime();
        document.getElementById('startStop').innerText = 'Stop';
        update();
    } else {
        isRunning = false;
        document.getElementById('startStop').innerText = 'Start';
    }
}

function reset() {
    isRunning = false;
    document.getElementById('startStop').innerText = 'Start';
    display.innerText = '00:00:00';
    laps = [];
    lapsContainer.innerText = '';
}

function lap() {
    if (isRunning) {
        let lapTime = formatTime(new Date().getTime() - startTime);
        laps.push(lapTime);
        displayLaps();
    }
}

function update() {
    if (isRunning) {
        let currentTime = new Date().getTime() - startTime;
        display.innerText = formatTime(currentTime);
        setTimeout(update, 10);
    }
}

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);

    return (
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds
    );
}

function displayLaps() {
    lapsContainer.innerHTML = '';
    for (let i = 0; i < laps.length; i++) {
        lapsContainer.innerHTML += `<div>Lap ${i + 1}: ${laps[i]}</div>`;
    }
}
