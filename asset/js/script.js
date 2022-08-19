console.log(api.key);

console.log(`https://api.yelp.com/v3/businesses/search`);

// Moment statement for day and time 

moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// variables
var cityRestaurantEl = $('#city-restaurant')
var firstEatNameEl = $("#first-eat-name")
var firstEatImgEl = $("#first-eat-img")
var firstEatRatingEl = $("#first-eat-rating")
var firstEatPriceEl = $("#first-eat-price")
var firstEatUrlEl = $("#first-eat-url")

// var searchButton = $(".searchButton")
// var apiKey = ""
// var searchInput = ""
// var currentTempEl = $("#todaytemp")
// var currentUvEl = $("#uvindex")
// var currentDate = moment().format("M/D/YYYY")
// var cityName = ""
// var savedCities = JSON.parse(localStorage.getItem("savedCities")) || []
// var previousSearch = document.querySelector("#previous-search")

var outdoorCategories = ['hiking', 'beaches', 'amusementparks', 'zoos', 'farms', 'stadiumsarenas', 'wineries', 'parks', 'mini_golf']

var indoorCategories = ['rock_climbing', 'axethrowing', 'aquariums', 'arcades', 'escapegames', 'shopping', 'trampoline', 'museums', 'theater', 'virtualrealitycenters']

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

var randomOutDoorCategories = getMultipleRandom(outdoorCategories, 3);
var randomInDoorCategories = getMultipleRandom(indoorCategories, 3);

function outdoorYelpApi(city) {
  
  // TO DO: Randomize 3 outdoor and define variables
 
  var outdoorSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=' + randomOutDoorCategories[0] + '&categories=' + randomOutDoorCategories[1] + '&categories=' + randomOutDoorCategories[2]

  console.log(outdoorSearchUrl)

  fetch(outdoorSearchUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + api.key,
      'Access-Control-Allow-Origin': '*', 
    },
  })
  .then(function (response) { 
  if (response.ok) {
      response.json().then(function (data) {
      console.log(data);
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
};
outdoorYelpApi('Irvine');

function indoorYelpApi(city) {

   // TO DO: Randomize 3 indoor and define

  var indoorSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=' + randomInDoorCategories[0] + '&categories=' + randomInDoorCategories[1] + '&categories=' + randomInDoorCategories[2]
  console.log(indoorSearchUrl)

  fetch(indoorSearchUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + api.key,
      'Access-Control-Allow-Origin': '*', 
    },
  })
  .then(function (response) { 
  if (response.ok) {
      response.json().then(function (data) {
      console.log(data);
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
}
indoorYelpApi("Irvine");

// <<<<<<< HEAD
// =======
function restaurantYelpApi(city) {
  
  var restaurantSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=restaurants&sort_by=rating'

  console.log(restaurantSearchUrl)

  fetch(restaurantSearchUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + api.key,
      'Access-Control-Allow-Origin': '*', 
    },
  })
  .then(function (response) { 
  if (response.ok) {
      response.json().then(function (eatResults) {
      console.log(eatResults);
      renderRestaurants(eatResults)
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
  }

function hotelYelpApi(city) {
  
  var hotelSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=hotels&sort_by=rating'

  console.log(hotelSearchUrl)

  fetch(hotelSearchUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + api.key,
      'Access-Control-Allow-Origin': '*', 
    },
  })
  .then(function (response) { 
  if (response.ok) {
      response.json().then(function (stayResults) {
      console.log(stayResults);
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
  }
  // hotelYelpApi("Irvine");
restaurantYelpApi("Irvine");

function renderRestaurants (eatResults) {
  var firstEatName = eatResults.businesses[0].name
  var firstEatImg = eatResults.businesses[0].image_url
  var firstEatRating = eatResults.businesses[0].rating
  var firstEatPrice = eatResults.businesses[0].price
  var firstEatUrl = eatResults.businesses[0].url
  
  // Plug city name into Eat Card (placeholder of Irvine)
  cityRestaurantEl.text(`Top Rated Restaurants in Irvine`)

  // Plug name into Eat Card 
  firstEatNameEl.text(firstEatName);

  // Plug image URL into Eat Card 
  firstEatImgEl.attr('src',firstEatImg); 

  //  Clicking image should link to Yelp review
  firstEatUrlEl.attr('href', firstEatUrl);

  // Plug rating into Eat Card
  firstEatRatingEl.text(`Rating: ${firstEatRating}`);

  // Plug price into Eat Card
  firstEatPriceEl.text(`Price: ${firstEatPrice}`);
}

// >>>>>>> 1f788785579936522e575d6ae65c096c9aea672c
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
// ]
