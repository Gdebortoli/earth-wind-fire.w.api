// Api Key
const apiKey = "711afb584510341f02a090829b0383fc";
// User input searching for specific city 
let citySearch = document.querySelector('#city-search')
// Search Btn
let searchButton = document.querySelector('#search-btn');
// Weather conditions 
const presentWeather = document.querySelector('#present-weather');
const pastWeather = document.querySelector('#pastWeather');
const futureWeather = document.querySelector('#futureWeather');
//Search History
let prevSearch = document.querySelector('#past-searches');
let searchedArray = [];

// City Search // Search Btn 
const searchWeatherForm = (event) => {
    event.preventDefault();
    var currCity = citySearch.ariaValueMax.trim(); // for formatting 
    if (currCity) {
    cityName.value = "";
    const apiCall = `api.openweathermap.org/data/2.5/forecast?q=${currCity}&appid=${apiKey}`;
    //fetch req for city
    fetch(apiCall)
    .then(data => data.json())
    .then(data => {
    let { lat, lon } = data.coordinates; 
    // original api call needed to get city data
    let wfApi = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    // fetch pt 2
    fetch(wfApi)
    .then(response => {
        return response.json(); 
    })

    })
    }
}

// Current weather 
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// 5 day forecast 


// Past Searches 




