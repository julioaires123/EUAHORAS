const newYear = "1/1/2025";

const daysEl = document.querySelector('.Dias');
const hourEl = document.querySelector('.Horas');
const minuteEl = document.querySelector('.Minutos');
const secondEl = document.querySelector('.Segundos');

function timeCountDown() {
  const now = new Date();
  const targetDate = new Date(newYear);
  let totalSeconds = Math.floor((targetDate - now) / 1000);

  // Subtraindo 20 segundos e adicionando 2 segundos
  totalSeconds = totalSeconds - 20 + 2; // Total de 18 segundos

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time >= 10 ? time : `0${time}`;
}

// Atualiza a contagem a cada segundo
setInterval(timeCountDown, 1000);
timeCountDown(); // Chama uma vez para inicializar
