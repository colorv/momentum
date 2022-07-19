const clock = document.querySelector("h1#clock");

function paintClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

paintClock();
setInterval(paintClock, 1000);
