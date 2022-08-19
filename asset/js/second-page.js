// Moment statement for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));


console.log(api.key);

console.log(`https://api.yelp.com/v3/businesses/search`);

// open weather api
// variables
var searchButton = $("btn");
var apiKey = "d4336a7fa9f7843bf43a971a6d63d529";
var searchInput = "";
var liveWeather = $(".weathericon");
var liveTempEl = $("#todaytemp");
var currentDate = moment().format("M/D/YYYY");
var cityName = "";
var todayContainer = $("todaycontainer");
// 5 day forecast display
var dailyDivs = [$('#day-1-div'), $('#day-2-div'), $('#day-3-div'), $('#day-4-div'), $('#day-5-div')];

var savedCities =JSON.parse(localStorage.getItem('savedCities')) || [];

// var weathersearchUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'


// loading the data onto HMTL page using ForLoop
for (var i = 0; i < savedCities.length; i++) {

    var city = savedCities[i];
    var cityNameEl = $("<li>");
    cityNameEl.addClass("list-group-item btn btn-primary col-12 btn-style btn-recent");
    cityNameEl.text(city);

    $(".list-group").append(cityNameEl);
}

// Key count for local storage 
var cityCount = 0;
// Search button click event
document.getElementById("formid").addEventListener('submit', function(event){
    event.preventDefault();
    searchInput = $(".input").val();
    var weatherContainer = document.getElementById("weather")
    weather.scrollIntoView()

        // Storing New Cities into local storage with the old Cities
        var previouslySavedCities = JSON.parse(localStorage.getItem("savedCities")) || []
        previouslySavedCities.push(searchInput)
        localStorage.setItem("savedCities", JSON.stringify(previouslySavedCities))

});

function getSavedCityWeather() {
    getUserLocation($(this).text())
}

// get city search for user location
function getUserLocation(city) {
        // Make fetch request
    // Get location lon and lat
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiKey).then(function(response) {
        
        // Check for valid response
        if (response.ok) {
            response.json().then(function(data) {
                
                // Gets the lon and lat of the city
                var locationLat = data[0].lat;
                var locationLon = data[0].lon;
                cityName = data[0].name;
                // Convert from Int to String
                var latString = locationLat.toString();
                var lonString = locationLon.toString();

                // Call function to get values
                getLocationWeather(latString, lonString);
            });
        } else {
            alert("Try Again, city not found");
        }
    }).catch(function(error) {
        
        alert("Weather Unavailable");
    });


};

function getLocationWeather(lat, lon) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;


    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                
                // City & date
                var currentCityNameEl = $(".weather-title");
                currentCityNameEl.text("Weather Forecast for " + cityName.charAt(0).toUpperCase() + cityName.slice(1));
                // Weather Icon
                var liveWeatherIconEl = $("#current-icon");
                liveWeatherIconEl.attr("src", "https://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png")

                var liveTemp = currentCity.append("<p>");
                currentCity.append(liveTemp);
                liveTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");

                // Current Temp
                var liveTempEl = $("#todaytemp");
                liveTempEl.text(data.current.temp + "F");

                var forecastarray = data.daily
                todaycontainer.html("");

                for (var i = 0; i < forecastarray.length - 2; i++) {
                    // converting Unix to date
                    var humanDateFormat = new Date(data.daily[i].dt * 1000).toLocaleDateString("en-US");

                    // Variables to dynamically create the classes into HTML
                    // var card = $("<div>").addClass("forecast-card");
                    // var cardbody = $("<div>").addClass("forecast-body");
                    // var cardheader = $("<div>").addClass("h3");
                    // var weatheri = $("<img>").addClass("card-header-icon");
                    // var temptext = $("<div>").addClass("h3");
                                

                    // getting the data from API
                    cardheader.text(humanDateFormat);
                    weatheri.attr("src", "https://openweathermap.org/img/wn/" + forecastarray[i].weather[0].icon + ".png");
                    temptext.text("Temp: " + forecastarray[i].temp.day + " F");
                    
                }
            })
        }
    })
}

$("#citiesList").on("submit", ".list-group-item", getSavedCityWeather)

// if (searchCity == "") {
//     // console.log(searchCity);
// } else {
//     $.ajax({
//         method: "GET",
//         url: currentWeather
       
//     }).then(function (response) {
//         // console.log(response.name);
//         var cityName = $(".list-cities");
//         cityName.append("<li>" + response.name + "</li>");
//         // Local storage
//         var local = localStorage.setItem(cityCount, response.name);
//         cityCount = cityCount + 1;

//         // current weather data 
//         var currentForecast = $(".currentForecast").append("<div>");
//         currentForecast.empty();
//         var currentCity = currentForecast.append("<p>");
//         currentForecast.append(currentCity);
//     });

// };