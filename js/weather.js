const API_KEY = "92145baa2c5865331f90d58691df6e80";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      temp.innerText = `${Math.floor(data.main.temp)}°C`;
    });
}
function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
