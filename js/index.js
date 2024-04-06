
let timer;
let minutes = 0;
let seconds = 0;
let isTimerRunning = false;

const display = document.getElementById("display");
const sBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

function ssTimer() {
  if (isTimerRunning) {
    clearInterval(timer);
    isTimerRunning = false;
    startStopBtn.textContent = "Start";
  } else {
    timer = setInterval(Timer, 1000);
    isTimerRunning = true;
    sBtn.textContent = "Pause";
  }
}

function Timer() {
  seconds--;
  if (seconds < 0) {
    if (minutes === 0) {
      clearInterval(timer);
      isTimerRunning = false;
      alert("Taymer yakunlandi!");
      return;
    }
    minutes--;
    seconds = 59;
  }

  display.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  display.textContent = "00:00";
  isTimerRunning = false;
  sBtn.textContent = "Start";
}

sBtn.addEventListener("click", ssTimer);
resetBtn.addEventListener("click", resetTimer);
function setTimer() {
  const input = prompt("Taymer uchun daqiqalarni kiriting:");
  const inputminut = parseInt(input);
  if (!isNaN(inputminut)) {
    minutes = inputminut;
    seconds = 0;
    display.textContent = `${minutes < 10 ? "0" + minutes : minutes}:00`;
  } else {
    alert("Noto'g'ri kiridingiz. Iltimos, faqat raqam kiriting.");
  }
}

setTimer();
