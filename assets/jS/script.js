// Api Key
const apiKey = "711afb584510341f02a090829b0383fc";
// User input searching for specific city 
let cityInput = document.querySelector('#city-name')
// Search Btn
let searchButton = document.querySelector('#search-button');
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
    var currCity = cityInput.value.trim();
    console.log(currCity);
    if (currCity) {
    cityInput.value = "";
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&limit=1&appid=${apiKey}`;
    //fetch req for city
    fetch(apiCall).then(data => data.json())
    .then(data => {
    console.log(data);
    
    // original api call needed to get city data
    let wfApi = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    let { lat, lon } = data.coordinates; 
    // fetch pt 2
    fetch(wfApi).then(response => {
        return response.json(); 
    })
    // getting the weather data
    .then(data => {
        console.log(data);

        let currWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        //fetch the weather data
        fetch(currWeather)
        .then(response =>{
            return response.json();
        })
        // .then(data => {
        //     futureWeatherDisplay(data);
        //     currentWeatherDisplay(data);
        //     pastWeatherDisplay(data);
        //     fiveDayWeatherDisplay(data);
        // })
    });
});
    } else {
        alert("Missing Information. Please enter a city name.");
    }
};
// Current weather 
// let currentWeatherDisplay
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// 5 day forecast 


// Past Searches 

document.getElementById('search-button').onclick = searchWeatherForm;


