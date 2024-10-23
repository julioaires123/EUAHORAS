const newYear = new Date("2025-01-01T00:00:00");
const daysEl = document.querySelector('.Dias');
const hourEl = document.querySelector('.Horas');
const minuteEl = document.querySelector('.Minutos');
const secondEl = document.querySelector('.Segundos');

function timeCountDown() {
  const nowDate = new Date();
  let totalSeconds = Math.floor((newYear - nowDate) / 1000);

  // Garantindo que o valor mínimo seja 0 (não contar negativo)
  totalSeconds = Math.max(0, totalSeconds - 20);

  const dias = Math.floor(totalSeconds / 86400); // 3600 * 24
  const horas = Math.floor((totalSeconds % 86400) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  daysEl.textContent = formatTime(dias);
  hourEl.textContent = formatTime(horas);
  minuteEl.textContent = formatTime(minutos);
  secondEl.textContent = formatTime(segundos);
}

function formatTime(time) {
  return String(time).padStart(2, '0');
}

// Inicializando e atualizando a cada 1 segundo
timeCountDown();
setInterval(timeCountDown, 1000);
