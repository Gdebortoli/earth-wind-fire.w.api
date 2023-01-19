const apiKey = "711afb584510341f02a090829b0383fc";
const citySearch = document.querySelector('#cityS')
const presentWeather = document.querySelector('#rn-weather');
const pastWeather = document.querySelector('#pastWeather');
const futureWeather = document.querySelector('#futureWeather');
let prevSearch = document.querySelector('#past-searches');
let searchedArray = [];
const searchBtn = document.querySelector('#search-btn');
portfolio

// City Search // Search Btn 
searchBtn.addEventListener('click', search)
const searchCity = (event) =>{
    event.preventDefault();
    const cityName = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=5&appid=${apiKey}`;
    fetch(cityName)
        .then(res => res.json())
        .then(data => {
            weatherNow(data[0].lat, data[0].lon, data[0].name)
        });
}
// Current weather
function weatherNow (lat, lon, name) {
    const weathApi = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(weathApi)
    .then(res => res.json())
    .then(data => {
        weatherNow(data)
    });
}

// Past Searches 

