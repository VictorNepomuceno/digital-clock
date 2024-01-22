const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const timerClock = setInterval(() => {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let second = date.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (second < 10) second = "0" + second;

  hour.innerText = hr;
  minutes.innerText = min;
  seconds.innerText = second;
});
