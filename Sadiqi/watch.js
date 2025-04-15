
function clock() {
    const secDots = document.getElementById('secDots');
    const minDots = document.getElementById('minDots');
    const hrDots = document.getElementById('hrDots');

    const date = new Date();
    let hours = date.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Create seconds dots
    let secondsDots = '';
    for (let i = 1; i <= 60; i++) {
        const rotation = i * 6;
        secondsDots += `<div class="dot${i === seconds ? ' active' : ''}" style="transform: rotate(${rotation}deg)"></div>`;
    }

    // Create minutes dots
    let minutesDots = '';
    for (let i = 1; i <= 60; i++) {
        const rotation = i * 6;
        minutesDots += `<div class="dot${i === minutes ? ' active' : ''}" style="transform: rotate(${rotation}deg)"></div>`;
    }

    // Create hours dots (12 total, 30 degrees each)
    let hoursDots = '';
    for (let i = 1; i <= 12; i++) {
        const rotation = i * 30;
        hoursDots += `<div class="dot${i === hours ? ' active' : ''}" style="transform: rotate(${rotation}deg)"></div>`;
    }

    secDots.innerHTML = secondsDots + `<b>${amPm}</b><h2>${zero(seconds)}<br><span>Seconds</span></h2>`;
    minDots.innerHTML = minutesDots + `<h2>${zero(minutes)}<br><span>Minutes</span></h2>`;
    hrDots.innerHTML = hoursDots + `<h2>${zero(hours)}<br><span>Hours</span></h2>`;
}

// Add leading zero to single-digit numbers
function zero(number) {
    return number < 10 ? '0' + number : number;
}

setInterval(clock, 1000);