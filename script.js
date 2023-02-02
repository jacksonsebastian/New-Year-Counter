const d = document.getElementById('days')
const h = document.getElementById('hours')
const m = document.getElementById('minutes')
const s = document.getElementById('seconds')


function updateTime() {
    // getting current year

const currentYear = new Date().getFullYear();

// getting Newyear

const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

// creating new date for newyear
const currentDate = new  Date();

const diff = newYear - currentDate;

const days = Math.floor(diff/1000/60/60/24);
const hours = Math.floor((diff/1000/60/60)%24);
const minutes = Math.floor((diff/1000/60)%60);
const seconds = Math.floor((diff/1000)%60);

d.innerHTML = days<10?"0" + days:days;
h.innerHTML = hours<10?"0" + hours:hours;
m.innerHTML = minutes<10?"0" + minutes:minutes;
s.innerHTML = seconds<10?"0" + seconds:seconds;
// console.log(days+ " " + hours + " " + minutes + " " +seconds)
}

setInterval(updateTime, 1000);