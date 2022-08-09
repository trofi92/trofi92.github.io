const weather = document.querySelector(
  "#weather span:first-child"
);
const city = document.querySelector(
  "#weather span:last-child"
);
const API_KEY = "ffd86e9c843e6dd08b0984e54f694a43";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      const weatherEmoji = document.createElement("p");
      const weatherImg = () => {
        if (data.weather[0].id >= 801)
          return (weatherEmoji.InnerText = "☁️");
        if (data.weather[0].id === 800)
          return (weatherEmoji.InnerText = "☀️");
        if (
          data.weather[0].id >= 200 &&
          data.weather[0].id < 233
        )
          return (weatherEmoji.InnerText = "🌩️");
        if (
          data.weather[0].id >= 300 &&
          data.weather[0].id < 322
        )
          return (weatherEmoji.InnerText = "🌧️");
        if (
          data.weather[0].id >= 500 &&
          data.weather[0].id < 532
        )
          return (weatherEmoji.InnerText = "🌧️");
        if (
          data.weather[0].id >= 600 &&
          data.weather[0].id < 623
        )
          return (weatherEmoji.InnerText = "❄️");
        if (
          data.weather[0].id >= 701 &&
          data.weather[0].id < 782
        )
          return (weatherEmoji.InnerText = "🌫️");
        if ((data.weather[0].id = 781))
          return (weatherEmoji.InnerText = "🌪️");
        else return "";
      };

      console.log(data.weather[0].id);
      weather.innerText = `${
        data.weather[0].main
      } ${weatherImg()} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("현재 위치를 알 수 없어요!.");
}

navigator.geolocation.getCurrentPosition(
  onGeoOk,
  onGeoError
);
