const days = document.querySelector("#days");
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear +1} 00:00:00`);



function updateCountdown() {
    const currentTime = new Date();
    const timeDiff = newYearTime - currentTime;

    const daysDiff = Math.floor(timeDiff/1000/60/60/24);
    const hoursDiff = Math.floor(timeDiff/1000/60/60) % 24;
    const minDiff = Math.floor(timeDiff/1000/60) % 60;
    const secsDiff = Math.floor(timeDiff/1000) % 60;

    days.innerHTML = daysDiff;
    hours.innerHTML = hoursDiff < 10 ? '0' + hoursDiff : hoursDiff;
    minutes.innerHTML = minDiff < 10 ? '0' + minDiff : minDiff;
    seconds.innerHTML = secsDiff < 10 ? '0' + secsDiff : secsDiff;
}

setInterval(updateCountdown, 1000);