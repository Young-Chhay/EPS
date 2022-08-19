// Moment statement for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// var resultTextEl = document.querySelector('#result-text');
// var resultContentEl = document.querySelector('#result-content');
// var searchFormEl = document.querySelector('#search-form');



console.log(api.key);

console.log(`https://api.yelp.com/v3/businesses/search`);

// Variables 
var apiKey = "d4336a7fa9f7843bf43a971a6d63d529";

var searchButton = $(".searchButton");

// local storage counting city names
var cityCount = 0;


// city names being loading onto HTML page using Forloop
for (var i = 0; i < localStorage.length; i++) {

    var city = localStorage.getItem(i);

    var cityName = $(".list-cities");

    cityName.append("<li>" + city + "</li>");
}



// Search button feature
searchButton.click(function () {

    var searchCity = $(".searchCity").val();


    // live weather
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&Appid=" + apiKey + "&units=imperial";


    if (searchCity == "") {
        // console.log(searchCity);
    } else {
        $.ajax({
            method: "GET",
            url: currentWeather

        }).then(function (response) {
            // console.log(response.name);
            var cityName = $(".list-cities");
            cityName.append("<li>" + response.name + "</li>");
            // Local storage
            var local = localStorage.setItem(cityCount, response.name);
            cityCount = cityCount + 1;

            // current weather data 
            var currentForecast = $(".currentForecast").append("<div>");
            currentForecast.empty();
            var currentCity = currentForecast.append("<p>");
            currentForecast.append(currentCity);

            // Adjust Date 
            var timeUTC = new Date(response.dt * 1000);
            currentCity.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
            currentCity.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
            // temperature input
            var liveTemp = currentCity.append("<p>");
            currentCity.append(liveTemp);
            liveTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");


        });



    }
});


// variables
// var searchButton = $(".searchButton")
// var apiKey = ""
// var searchInput = ""
// var currentTempEl = $("#todaytemp")
// var currentUvEl = $("#uvindex")
// var currentDate = moment().format("M/D/YYYY")
// var cityName = ""
// var savedCities = JSON.parse(localStorage.getItem("savedCities")) || []
// var previousSearch = document.querySelector("#previous-search")

// var cityResponse = [
//     {
//         city: "New York City",
//         activity: "Central Park",
//         restaurant: "Joe's Shanghai",
//         // weather: "live weather API Data"
//     },

//     {
//         city: "Los Angeles",
//         activity: "Santa Monica Pier",
//         restaurant: "Honey Hi",
//         // weather: "live weather API Data"

//     },

//     {
//         city: "San Diego",
//         activity: "Torrey Pines",
//         restaurant: "Javier's - La Jolla"
//         // weather: "live weather API Data"

//     }
//
