// Moment statement for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// Moved api key to config file for security. Each member MUST DO 
// Kevin - weather apiKey = "d4336a7fa9f7843bf43a971a6d63d529";
var searchButton = $("btn");
var searchInput = "";

// Weather variables
var liveWeather = $(".weathericon");
var liveTempEl = $("#todaytemp");
var currentDate = moment().format("M/D/YYYY");
var cityName = "";
var forecastDetails = $('#forecast-details')
var forecastOne = $('#forecast-one')
var forecastTwo = $('#forecast-two')
var forecastThree = $('#forecast-three')
var forecastFour = $('#forecast-four')
var forecastFive = $('#forecast-five')
var tempOne = $('#temp-one')
var tempTwo = $('#temp-two')
var tempThree = $('#temp-three')
var tempFour = $('#temp-four')
var tempFive = $('#temp-five')

// 5 day forecast display
var dailyDivs = [$('#day-1-div'), $('#day-2-div'), $('#day-3-div'), $('#day-4-div'), $('#day-5-div')];

// Eat variables
var cityRestaurantEl = $('#city-restaurant')
var eatNameEl = $('#eat-name')
var eatCategoryEl = $('#eat-category')
var eatImgEl = $("#eat-img")
var eatRatingEl = $("#eat-rating")
var eatPriceEl = $("#eat-price")
var eatUrlEl = $("#eat-url")
var eatRefresh = $("#eat-refresh")

// Play activity variables 
var playNameOneEl = $("#play-name-one")
var playCategoryOneEl = $('#play-category-one')
var playImgOneEl = $("#play-img-one")
var playRatingOneEl = $("#play-rating-one")
var playPriceOneEl = $("#play-price-one")
var playUrlOneEl = $("#play-url-one")

var playNameTwoEl = $('#play-name-two')
var playCategoryTwoEl = $('#play-category-two')
var playImgTwoEl = $("#play-img-two")
var playRatingTwoEl = $("#play-rating-two")
var playPriceTwoEl = $("#play-price-two")
var playUrlTwoEl = $("#play-url-two")

var playNameThreeEl = $('#play-name-three')
var playCategoryThreeEl = $('#play-category-three')
var playImgThreeEl = $("#play-img-three")
var playRatingThreeEl = $("#play-rating-three")
var playPriceThreeEl = $("#play-price-three")
var playUrlThreeEl = $("#play-url-three")

// Indoor activity variables
// var cityIndoorEl = $('#city-indoor')
// var indoorNameEl = $('#indoor-name')
// var indoorCategoryEl = $('#indoor-category')
// var indoorImgEl = $("#indoor-img")
// var indoorRatingEl = $("#indoor-rating")
// var indoorPriceEl = $("#indoor-price")
// var indoorUrlEl = $("#indoor-url")
// var switchElement = $('.switch')

// Stay variables
var cityHotelEl = $('#city-hotel')
var hotelNameEl = $("#hotel-name")
var hotelImgEl = $("#hotel-img")
var hotelRatingEl = $("#hotel-rating")
var hotelPriceEl = $("#hotel-price")
var hotelUrlEl = $("#hotel-url")
var hotelRefresh = $("#hotel-refresh")

var savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];

var searchFormEl = $('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = $('#search-input').val();

  if (!searchInputVal) {
    return;
  } else {

  var city = searchInputVal
  console.log(city);
  localStorage.setItem('cities', city);
  restaurantYelpApi(city);
  hotelYelpApi(city);
  // outdoorYelpApi(city);
  indoorYelpApi(city);
  }
}

searchFormEl.submit(handleSearchFormSubmit);

// var weathersearchUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

function getCities () {
  // loading the data onto HMTL page using ForLoop
  for (var i = 0; i < savedCities.length; i++) {

      var city = savedCities[i];
      var cityNameEl = $("<li>");
      cityNameEl.addClass("list-group-item btn btn-primary col-12 btn-style btn-recent");
      cityNameEl.text(city);

      $(".list-group").append(cityNameEl);
  }
}

// Key count for local storage 
var cityCount = 0;

// Search button click event
// document.getElementById("formid").addEventListener('submit', function(event){
//     event.preventDefault();
//     searchInput = $(".input").val();
//     var weatherContainer = document.getElementById("weather")
//     weather.scrollIntoView()

//         // Storing New Cities into local storage with the old Cities
//         var previouslySavedCities = JSON.parse(localStorage.getItem("savedCities")) || []
//         previouslySavedCities.push(searchInput)
//         localStorage.setItem("savedCities", JSON.stringify(previouslySavedCities))
// })
// }

// Get city's today forecast
// function getWeather (city) {
//     // live weather
//     var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&Appid=" + weatherApi.key + "&units=imperial";

//     if (city == "") {
//         // console.log(searchCity);
//     } else {
//         $.ajax({
//             method: "GET",
//             url: currentWeather

//         }).then(function (response) {
//             // console.log(response.name);
//             var cityName = $(".list-cities");
//             cityName.append("<li>" + response.name + "</li>");
//             // Local storage
//             var local = localStorage.setItem(cityCount, response.name);
//             cityCount = cityCount + 1;

//             // current weather data 
//             var currentForecast = $(".currentForecast").append("<div>");
//             currentForecast.empty();
//             var currentCity = currentForecast.append("<p>");
//             currentForecast.append(currentCity);

//             // Adjust Date 
//             var timeUTC = new Date(response.dt * 1000);
//             currentCity.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
//             currentCity.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);

//             // temperature input
//             var liveTemp = currentCity.append("<p>");
//             currentCity.append(liveTemp);
//             liveTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");

//         });
//     };
//   }

// function getSavedCityWeather () {
//     getUserLocation($(this).text())
// }

// get city search for user location
// function getCityCoord(city) {
//         // Make fetch request
//     // Get location lon and lat
//     fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + weatherApi.key).then(function(response) {
        
//         // Check for valid response
//         if (response.ok) {
//             response.json().then(function(coordData) {
                
//                 // Get lat and lon of city to later get city weather
//                 var lat = coordData[0].lat;
//                 var lon = coordData[0].lon;
//                 cityName = coordData[0].name;

//                 // Call function to get values
//                 getCityWeather(lat, lon);
//             });
//         } else {
//             // To do: replace alert with another prompt that isn't Window or console
//             alert("Try Again, city not found");
//         }
//     }).catch(function(error) {
//         // To do: replace alert with another prompt that isn't Window or console
//         alert("Weather Unavailable");
//     });


// };

// function getCityWeather(lat, lon) {
//     var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + weatherApi.key;

//     fetch(weatherApiUrl).then(function(response) {
//         if (response.ok) {
//             response.json().then(function(weatherData) {
                
//               console.log(weatherData);

//                 // City & date
//                 var currentCityNameEl = $(".weather-title");
//                 currentCityNameEl.text("Weather Forecast for " + cityName.charAt(0).toUpperCase() + cityName.slice(1));

//                 // TO DO: Weather Icon?
//                 // var liveWeatherIconEl = $("#current-icon");
//                 // liveWeatherIconEl.attr("src", "https://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + "@2x.png")

//                 // var liveTemp = currentCity.append("<p>");
//                 // currentCity.append(liveTemp);
//                 // liveTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");

//                 // // Current Temp
//                 // var liveTempEl = $("#todaytemp");
//                 // liveTempEl.text(data.current.temp + "F");
//                 var fiveDayForecast = weatherData.daily
//                 console.log(fiveDayForecast)
//                 for (var i = 0; i < fiveDayForecast.length - 3; i++) {
//                 var date = new Date(fiveDayForecast[i].dt * 1000).toLocaleDateString("en-US")
//                 console.log(date)
//                 }
//                 // Day 0
//                 var date1 = new Date(fiveDayForecast[0].dt * 1000).toLocaleDateString("en-US")
            
//                 // var temp1 = fiveDayForecast[0].daily[0].temp.day
//                 // forecastOne.append(`<h3>${date1}</h3>`)
//                 // forecastOne.append(`<p>Temp: ${temp1}</p>`)
//                 // todaycontainer.html("");
                
//                 // for (var i = 0; i < fiveDayForecast.length - 3; i++) {
//                 //     // converting Unix to date
//                 //     var humanDateFormat = new Date(fiveDayForecast.dt).toLocaleDateString("en-US");
                
//                 //     console.log(humanDateFormat)
//                 //     // Forecast Day 1
//                 //     forecastOne.append(`<h3>${humanDateFormat}</h3>`)
//                 //     tempOne.text(`Temp: `)
//                 //     // Variables to dynamically create the classes into HTML
//                 //     // var card = $("<div>").addClass("forecast-card");
//                 //     // var cardbody = $("<div>").addClass("forecast-body");
//                 //     // var cardheader = $("<div>").addClass("h3");
//                 //     // var weatheri = $("<img>").addClass("card-header-icon");
//                 //     // var temptext = $("<div>").addClass("h3");
                                

//                 //     // getting the data from API
//                 //     // cardheader.text(humanDateFormat);
//                 //     // weatheri.attr("src", "https://openweathermap.org/img/wn/" + forecastarray[i].weather[0].icon + ".png");
//                 //     // temptext.text("Temp: " + forecastarray[i].temp.day + " F");

//                 // }        
//             })
//         }
//     })
// }

// $("#citiesList").on("submit", ".list-group-item", getSavedCityWeather)

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

// }

// Outdoor and indoor activity categories
var outdoorCategories = ['hiking', 'beaches', 'amusementparks', 'zoos', 'farms', 'stadiumsarenas', 'wineries', 'parks', 'mini_golf']
var indoorCategories = ['rock_climbing', 'axethrowing', 'aquariums', 'arcades', 'escapegames', 'trampoline', 'museums', 'theater', 'virtualrealitycenters']

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

function outdoorYelpApi(city) {
  
  // Randomly take 3 categories from outdoorCategories array
  var randomOutDoorCategories = getMultipleRandom(outdoorCategories, 3);

  // Assign each category a variable
  var outdoorOne = randomOutDoorCategories[0]
  var outdoorTwo = randomOutDoorCategories[1]
  var outdoorThree = randomOutDoorCategories[2]

  var outdoorSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=' + outdoorOne + '&categories=' + outdoorTwo + '&categories=' + outdoorThree

  console.log(outdoorSearchUrl)

  fetch(outdoorSearchUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + yelpApi.key,
      'Access-Control-Allow-Origin': '*', 
    },
  })
  .then(function (response) { 
  if (response.ok) {
      response.json().then(function (outdoorResult) {
      console.log(outdoorResult);
      renderOutdoor(outdoorResult);
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
  }

  // Fetch indoor activity results
function indoorYelpApi(city) {

   // TO DO: Randomize 3 indoor and define
   var randomIndoorCategories = getMultipleRandom(indoorCategories, 3);

  // Assign each category a variable
  var indoorOne = randomIndoorCategories[0]
  var indoorTwo = randomIndoorCategories[1]
  var indoorThree = randomIndoorCategories[2]

   var indoorSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=' + indoorOne + '&categories=' + indoorTwo + '&categories=' + indoorThree
   console.log(indoorSearchUrl)

  fetch(indoorSearchUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + yelpApi.key,
      'Access-Control-Allow-Origin': '*', 
    },
  })
  .then(function (response) { 
  if (response.ok) {
    response.json().then(function (indoorResult) {
      console.log(indoorResult);
      renderIndoor(indoorResult);
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
}

// Toggle button to swap to indoors and outdoors
function toggleActivity (event) {

// IF a click is made on the switch button, the dark mode will be toggled
switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
}
  // Fetch restaurant results
function restaurantYelpApi(city) {
  
  // Cors-anywhere to utilize Yelp API which does not allow CORS
 var restaurantSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=restaurants&sort_by=rating'
  
 console.log(restaurantSearchUrl);

  fetch(restaurantSearchUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + yelpApi.key,
      'Access-Control-Allow-Origin': '*', 
    },
  })

  .then(function (response) { 
  if (response.ok) {
      response.json().then(function (eatResults) {

      // If response ok, render and display restaurant results
      console.log(eatResults);
      renderRestaurants(eatResults);
      return city;
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
  }

function hotelYelpApi (city) {
  
  var hotelSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=hotels&sort_by=rating'

  console.log(hotelSearchUrl)

  fetch(hotelSearchUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + yelpApi.key,
      'Access-Control-Allow-Origin': '*', 
    },
  })

  .then(function (response) { 
  if (response.ok) {
      response.json().then(function (stayResults) {

      // If response ok, render and display hotel result
      console.log(stayResults);
      renderHotel(stayResults);
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
  }

// Display eat results to HTML
function renderRestaurants (eatResults) {
  var eatList = eatResults.businesses
  var rndEatIndex = Math.floor(Math.random() * eatList.length)

  var eatName = eatList[rndEatIndex].name
  var eatCategory = eatList[rndEatIndex].categories[0].title
  var eatImg = eatList[rndEatIndex].image_url
  var eatRating = eatList[rndEatIndex].rating
  var eatPrice = eatList[rndEatIndex].price
  var eatUrl = eatList[rndEatIndex].url
  
  // diplay city name into Eat Card (placeholder of Irvine)
  cityRestaurantEl.text('Top Rated Food Destinations')

  // display restaurant name into eat card
  eatNameEl.text(eatName);

  // display restaurant category into eat card 
  eatCategoryEl.text(`Category: ${eatCategory}`);

  // display image URL into eat card 
  eatImgEl.attr('src',eatImg); 


  // clicking image links to Yelp review
  eatUrlEl.attr('href', eatUrl);

  // diplay rating into eat card
  eatRatingEl.text(`Rating: ${eatRating}`);

  // diplay price into eat card
  if (!eatPrice) {
    eatPriceEl.text("");
  } else {
  eatPriceEl.text(`Price: ${eatPrice}`);
  }
  eatRefresh.on('click', renderRestaurants(eatResults));
}

// display hotel results to HTML
function renderHotel (stayResults) {
  var hotelList = stayResults.businesses
  var rndHotelIndex = Math.floor(Math.random() * hotelList.length)
  
  var hotelName = hotelList[rndHotelIndex].name
  var hotelImg = hotelList[rndHotelIndex].image_url
  var hotelRating = hotelList[rndHotelIndex].rating
  var hotelPrice = hotelList[rndHotelIndex].price
  var hotelUrl = hotelList[rndHotelIndex].url
  
  // diplay city name into eat Card (placeholder Irvine)
  cityHotelEl.text(`Top Hotels`)

  // display name into hotel card 
  hotelNameEl.text(hotelName);

  // display image URL hotel card 
  hotelImgEl.attr('src', hotelImg); 

  //  Clicking image links to Yelp review
  hotelUrlEl.attr('href', hotelUrl);

  // display rating into hotel card
  hotelRatingEl.text(`Rating: ${hotelRating} Stars`);

  // display price into hotel card if price is detailed
  if (!hotelPrice) {
    hotelPriceEl.text("");
  } else {
    hotelPriceEl.text(`Price: ${hotelPrice}`);
  }

}

// Render outdoor activities
function renderOutdoor (outdoorResult) {

  var outdoorList = outdoorResult.businesses
  console.log(outdoorResult);

  // Outdoor activity one
  var outdoorNameOne = outdoorList[0].name
  var outdoorCategoryOne = outdoorList[0].categories[0].title
  var outdoorImgOne = outdoorList[0].image_url
  var outdoorUrlOne = outdoorList[0].url
  var outdoorRatingOne = outdoorList[0].rating
  var outdoorPriceOne = outdoorList[0].price

  // display activity name into play card
  playNameOneEl.text(outdoorNameOne);

  // display activity category into play card 
  playCategoryOneEl.text(`Category: ${outdoorCategoryOne}`);

  // display image URL into play card 
  playImgOneEl.attr('src',outdoorImgOne); 

  // clicking image links to Yelp review
  playUrlOneEl.attr('href', outdoorUrlOne);

  // diplay rating into play card
  playRatingOneEl.text(`Rating: ${outdoorRatingOne}`);

  // diplay price into play card if activity costs money
  if (!outdoorPriceOne) {
    playPriceOneEl.text("");
  } else {
  playPriceOneEl.text(`Price: ${outdoorPriceOne}`);
  }

    // Outdoor activity two
  var outdoorNameTwo = outdoorList[1].name
  var outdoorCategoryTwo = outdoorList[1].categories[0].title
  var outdoorImgTwo = outdoorList[1].image_url
  var outdoorUrlTwo = outdoorList[1].url
  var outdoorRatingTwo = outdoorList[1].rating
  var outdoorPriceTwo = outdoorList[1].price

  playNameTwoEl.text(outdoorNameTwo);

  playCategoryTwoEl.text(`Category: ${outdoorCategoryTwo}`);

  playImgTwoEl.attr('src',outdoorImgTwo); 

  playUrlTwoEl.attr('href', outdoorUrlTwo);

  playRatingTwoEl.text(`Rating: ${outdoorRatingTwo}`);

  if (!outdoorPriceTwo) {
    playPriceOneEl.text("");
  } else {
  playPriceTwoEl.text(`Price: ${outdoorPriceTwo}`);
  }
 
  // Outdoor activity one
  var outdoorNameThree = outdoorList[2].name
  var outdoorCategoryThree = outdoorList[2].categories[0].title
  var outdoorImgThree = outdoorList[2].image_url
  var outdoorUrlThree = outdoorList[2].url
  var outdoorRatingThree = outdoorList[2].rating
  var outdoorPriceThree = outdoorList[2].price

  playNameThreeEl.text(outdoorNameThree);

  playCategoryThreeEl.text(`Category: ${outdoorCategoryThree}`);

  playImgThreeEl.attr('src',outdoorImgThree); 

  playUrlThreeEl.attr('href', outdoorUrlThree);

  playRatingThreeEl.text(`Rating: ${outdoorRatingThree}`);

  if (!outdoorPriceOne) {
    playPriceThreeEl.text("");
  } else {
  playPriceThreeEl.text(`Price: ${outdoorPriceThree}`);
  }
};

//render indoor activities
function renderIndoor (indoorResult) {
 
  var indoorList = indoorResult.businesses
  console.log(indoorResult);

  // indoor activity one
  var indoorNameOne = indoorList[0].name
  var indoorCategoryOne = indoorList[0].categories[0].title
  var indoorImgOne = indoorList[0].image_url
  var indoorUrlOne = indoorList[0].url
  var indoorRatingOne = indoorList[0].rating
  var indoorPriceOne = indoorList[0].price

  // display activity name into play card
  playNameOneEl.text(indoorNameOne);

  // display activity category into play card 
  playCategoryOneEl.text(`Category: ${indoorCategoryOne}`);

  // display image URL into play card 
  playImgOneEl.attr('src',indoorImgOne); 

  // clicking image links to Yelp review
  playUrlOneEl.attr('href', indoorUrlOne);

  // diplay rating into play card
  playRatingOneEl.text(`Rating: ${indoorRatingOne}`);

  // diplay price into play card if activity costs money
  if (!indoorPriceOne) {
    playPriceOneEl.text("");
  } else {
  playPriceOneEl.text(`Price: ${indoorPriceOne}`);
  }

    // indoor activity two
  var indoorNameTwo = indoorList[1].name
  var indoorCategoryTwo = indoorList[1].categories[0].title
  var indoorImgTwo = indoorList[1].image_url
  var indoorUrlTwo = indoorList[1].url
  var indoorRatingTwo = indoorList[1].rating
  var indoorPriceTwo = indoorList[1].price

  playNameTwoEl.text(indoorNameTwo);

  playCategoryTwoEl.text(`Category: ${indoorCategoryTwo}`);

  playImgTwoEl.attr('src',indoorImgTwo); 

  playUrlTwoEl.attr('href', indoorUrlTwo);

  playRatingTwoEl.text(`Rating: ${indoorRatingTwo}`);

  if (!indoorPriceTwo) {
    playPriceOneEl.text("");
  } else {
  playPriceTwoEl.text(`Price: ${indoorPriceTwo}`);
  }
 
  // indoor activity one
  var indoorNameThree = indoorList[2].name
  var indoorCategoryThree = indoorList[2].categories[0].title
  var indoorImgThree = indoorList[2].image_url
  var indoorUrlThree = indoorList[2].url
  var indoorRatingThree = indoorList[2].rating
  var indoorPriceThree = indoorList[2].price

  playNameThreeEl.text(indoorNameThree);

  playCategoryThreeEl.text(`Category: ${indoorCategoryThree}`);

  playImgThreeEl.attr('src',indoorImgThree); 

  playUrlThreeEl.attr('href', indoorUrlThree);

  playRatingThreeEl.text(`Rating: ${indoorRatingThree}`);

  if (!indoorPriceOne) {
    playPriceThreeEl.text("");
  } else {
  playPriceThreeEl.text(`Price: ${indoorPriceThree}`);
  }
};


function fetchUrls (city) {
  hotelYelpApi(city);
  restaurantYelpApi(city);
  indoorYelpApi(city);
  outdoorYelpApi(city);
}

