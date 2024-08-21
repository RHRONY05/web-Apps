let URL = "https://api.openweathermap.org/data/2.5/weather?&appid=1b922024e37d5105fb1355947604ae5a&units=metric&q="
let apiKey = "1b922024e37d5105fb1355947604ae5a";
// let city = "Dhaka";

let searchBtn = document.querySelector(".search button");
let searchBox = document.querySelector(".search Input");
let weatherIcon = document.querySelector(".weather-icon");
let visibility = document.querySelector(".display");
//keep this URL it will work letter
// Units-> metric = celsius, imperial = Farhenheit

let checkWeather = async (city) => {
    let response = await fetch(URL + city);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        visibility.style.display = "none";
    } else {
        let data = await response.json();
        document.querySelector("#temp").innerText = Math.round(data.main.temp) + "°c";
        document.querySelector("#city").innerText = data.name;
        document.querySelector("#humidity").innerHTML = `<b>${data.main.humidity}%</b>`;
        document.querySelector("#wind").innerHTML = `<b>${data.wind.speed} km/h<b>`;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloud.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/sun.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain-removebg-preview.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/summer-rain-vector-icon__1_-removebg-preview.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/_mist-28-512.webp";
        }

        visibility.style.display = "flex";
        document.querySelector(".error").style.display = "none"
    }
};


checkWeather();
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
