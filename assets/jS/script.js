// Api Key
const apiKey = "711afb584510341f02a090829b0383fc";
let apiUrl = "";
// Searching for specific city 
let cityInput = document.querySelector('#city-name');
let currentCity = document.querySelector('#city-current');
// Location Search
let curLat = "";
let curLong = "";
//Weather
uVIUrl = "";
fivedwUrl = "";
// Search Btn
let searchButton = document.querySelector('#search-button');
// Weather conditions 
const presentWeather = document.querySelector('#present-weather');
const pastWeather = document.querySelector('#pastWeather');
const futureWeather = document.querySelector('#futureWeather');
//Search History
let prevSearch = document.querySelector('#past-searches');
let storedHistory = JSON.parse(localStorage.getItem('cityHistory'));
console.log(storedHistory);
if (!searchedHist) var searchedHist = [];

// Getting coordinates to use in search for city api
var getCoordinates = function (searchParam) {
    var geocoding = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchParam + "&limit=5&appid=" + apiKey;
    var coordinates = fetch(geocoding).then(function (response) {
        if (response.ok) {
            var coordinates = response.json().then(function (data) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                // Setting coordinates variable
                var coordArray = {
                    lattitude: lat,
                    longitude: lon
                }
                return (coordArray);
            })
        }
        return (coordinates);
    });
    return (coordinates);
};



// City Search // Search Btn 
const searchWeatherForm = function (event) {
    event.preventDefault();
    currCitySearch = cityInput.value.trim();
    // console.log("currCitySearch");
    getCoordinates(currCitySearch)
    .then(function (data) {
        curLat = data.lattitude; 
        curLong = data.longitude;

        window.localStorage.setItem("cityHistory", JSON.stringify(storedHistory));
        apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + curLat + "&lon=" + curLong + "&appid=" + apiKey + "&units=imperial";
    // display current weather
        currentWeatherDisplay(); 
    // UV index 
        uVIUrl = "https://api.openweathermap.org/data/2.5/air_pollution?lat=" + curLat + "&lon=" + curLong + "&appid=" + apiKey + "&units=imperial";
    // Display Weather forecast
        fivedwUrl = forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + curLat + "&lon=" + curLong + "&appid=" + apiKey + "&units=imperial";
        fiveDayWeatherDisplay();
    // add search history
        searchedHist.push(currCitySearch);

        cityInput.value = ""; 
        console.log(JSON.parse(window.localStorage.getItem("cityHistory")));
    }); 
};


// Search History Display fx



// // Current weather Display fx 
// function currentWeatherDisplay() {
// }

// // 5 day forecast fx
// const fiveDayWeatherDisplay = function () {

// };

// document.getElementById('search-button').onclick = searchWeatherForm;





    // if (currCity) {
    // cityInput.value = "";
    // const apiCall = `https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=5&appid=${apiKey}`;
    // //fetch req for city
    // fetch(apiCall).then(data => data.json())
    // .then(data => {
    // console.log(data);
    // let { lat, lon } = data.currCity.coord;   
    // // original api call needed to get city data
    // let wfApi = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`;
   
    // // fetch pt 2
    // fetch(wfApi).then(response => {
    //     return response.json(); 
    // })
    // // getting the weather data
    // .then(data => {
    //     console.log(data);

    //     let currWeather = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}}`;
    //     //fetch the weather data
    //     fetch(currWeather)
    //     .then(response =>{
    //         return response.json();
    //     })
    //     // .then(data => {
    //     //     futureWeatherDisplay(data);
    //     //     currentWeatherDisplay(data);
    //     //     pastWeatherDisplay(data);
    //     //     fiveDayWeatherDisplay(data);
    //     // })
    // });
// });
//     } else {
//         alert("Missing Information. Please enter a city name.");

