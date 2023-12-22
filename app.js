const newYear = "1/1/2024";

const daysEl = document.querySelector('.Dias');
const hourEl = document.querySelector('.Horas');
const minuteEl = document.querySelector('.Minutos');
const secondEl = document.querySelector('.Segundos');

function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - nowDate) / 1000;

  const Dias = Math.floor(totalSeconds / 3600 / 24);
  const Horas = Math.floor(totalSeconds / 3600) % 24;
  const Minutos = Math.floor(totalSeconds / 60) % 60;
  const Segundos = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(Dias);
  hourEl.textContent = formatTime(Horas);
  minuteEl.textContent = formatTime(Minutos);
  secondEl.textContent = formatTime(Segundos);
}

function formatTime(time) {
  return time > 9 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);