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

function outdoorYelpApi(city) {
  
  // TO DO: Randomize 3 outdoor and define variables
  
  var outdoorSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=' + outdoorCategory1 + '&categories=' + outdoorCategory2 + '&categories=' + outdoorCategory3

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
  }

function indoorYelpApi(city) {

   // TO DO: Randomize 3 indoor and define

  var indoorSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=' + indoorCategory1 + '&categories=' + indoorCategory2 + '&categories=' + indoorCategory3

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


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1f788785579936522e575d6ae65c096c9aea672c
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
<<<<<<< HEAD
=======
      renderRestaurants(eatResults)
>>>>>>> 1f788785579936522e575d6ae65c096c9aea672c
      });
  } else {
      alert('Error: ' + response.statusText);
  }
  })
  .catch(function (e) {
  console.log(e);
  });
  }

<<<<<<< HEAD
restaurantYelpApi("Irvine");

=======
>>>>>>> 1f788785579936522e575d6ae65c096c9aea672c
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
<<<<<<< HEAD

hotelYelpApi("Irvine");
=======
  // hotelYelpApi("Irvine");
restaurantYelpApi("Irvine");
>>>>>>> 1f788785579936522e575d6ae65c096c9aea672c

function renderRestaurants (eatResults) {
  var firstEatName = eatResults.businesses[0].name
  var firstEatImg = eatResults.businesses[0].image_url
  var firstEatRating = eatResults.businesses[0].rating
  var firstEatPrice = eatResults.businesses[0].price
<<<<<<< HEAD

  // TO DO : Clicking image should link to Yelp review
  var firstEatUrl = eatResults.businesses[0].url

  // TO DO: Plug name into Eat Card 

  // TO DO: Plug image URL into Eat Card 

  // TO DO: Plug rating into Eat Card

  // TO DO: Plug price into Eat Card

}
=======
=======
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
>>>>>>> 1f788785579936522e575d6ae65c096c9aea672c

>>>>>>> 107526f034608e3888d1ad9675d7b5365a8612fa
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
