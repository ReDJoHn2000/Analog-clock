const secondTime = document.querySelector(".second-hand");
const minTime = document.querySelector(".min-hand");
const hourTime = document.querySelector(".hour-hand");
const date = document.querySelector(".date");

setInterval(clock, 1000);

function clock() {
  const currentTime = new Date();

  date.innerHTML = currentTime;

  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const secondDegree = (seconds / 60) * 360 + 90;
  const minDegree = (secondDegree + minutes / 60) * 360 + 90;
  const hourDegree = (minDegree + hours / 12) * 360 + 90;

  secondTime.style.transform = `rotate(${secondDegree}deg)`;

  minTime.style.transform = `rotate(${minDegree}deg)`;

  hourTime.style.transform = `rotate(${hourDegree}deg)`;
}
