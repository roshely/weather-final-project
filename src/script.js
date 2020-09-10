function displayFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#weather-temperature");
  let fahrenheitTemperature = 68;
  temperatureElement.innerHTML = `${fahrenheitTemperature}`;
}
function displayCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#weather-temperature");
  let celsiusTemperature = 20;
  temperatureElement.innerHTML = `${celsiusTemperature}`;
}
let currently = new Date();
let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

let day = days[currently.getDay()];
let hours = currently.getHours();
let minutes = currently.getMinutes();

let currentDay = document.querySelector("#day");
currentDay.innerHTML = day;

let currentTime = document.querySelector("#time");
currentTime.innerHTML = `${hours}:${minutes}`;

let inputSearch = document.querySelector("search-form");
inputSearch, addEventListener("submit", citySearch);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsius);

function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("#currentCity");
  city.innerHTML = `${cityInput.value}`;

  let apiKey = "48e1fe391a7777619d705f2d80b989e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${apiKey}`;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#weather-temperature");
    temperatureElement.innerHTML = `${temperature}`;
  }
  axios.get(`${apiUrl}`).then(showTemperature);
}
