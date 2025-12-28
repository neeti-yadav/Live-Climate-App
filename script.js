function getWeather() {
  const city = document.getElementById("city").value;
  const temp = document.getElementById("temp");
  const condition = document.getElementById("condition");
  const place = document.getElementById("place");

  if (city === "") {
    condition.innerText = " Enter city name";
    return;
  }

  // Fake weather (for easy understanding)
  const randomTemp = Math.floor(Math.random() * 15) + 20;

  temp.innerText = randomTemp + "°C";
  condition.innerText = "Cloudy";
  place.innerText = city;
}