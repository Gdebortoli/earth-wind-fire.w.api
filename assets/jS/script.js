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
function search() {
    const cityLink = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=5&appid=${apiKey}`;
    fetch(cityLink)
        .then(res => res.json())
        .then(data => {
            weatherNow(data[0].lat, data[0].lon, data[0].name)
        });
}
// Current weather
function weatherNow (lat, lon, name) {
    const weathApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    fetch(weathApi)
}

// Past Searches 

