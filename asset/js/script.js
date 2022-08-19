console.log(api.key);

console.log(`https://api.yelp.com/v3/businesses/search`);

// Moment statement for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// variables
var cityRestaurantEl = $('#city-restaurant')
var eatNameEl = $('#eat-name')
var eatCategoryEl = $('#eat-category')
var eatImgEl = $("#eat-img")
var eatRatingEl = $("#eat-rating")
var eatPriceEl = $("#eat-price")
var eatUrlEl = $("#eat-url")

// Insert outdoor activity variables here
var cityOutdoorEl = $('#city-outdoor')
var outdoorNameEl = $('#outdoor-name')
var outdoorCategoryEl = $('#outdoor-category')
var outdoorImgEl = $("#outdoor-img")
var outdoorRatingEl = $("#outdoor-rating")
var outdoorPriceEl = $("#outdoor-price")
var outdoorUrlEl = $("#outdoor-url")

// // Insert indoor activity variables here
var cityIndoorEl = $('#city-indoor')
var indoorNameEl = $('#indoor-name')
var indoorCategoryEl = $('#indoor-category')
var indoorImgEl = $("#indoor-img")
var indoorRatingEl = $("#indoor-rating")
var indoorPriceEl = $("#indoor-price")
var indoorUrlEl = $("#indoor-url")

// // Insert Hotel variables here
var cityHotelEl = $('#city-hotel')
var hotelNameEl = $("#hotel-name")
var hotelImgEl = $("#hotel-img")
var hotelRatingEl = $("#hotel-rating")
var hotelPriceEl = $("#hotel-price")
var hotelUrlEl = $("#hotel-url")
var hotelRefresh = $("#hotel-refresh")

// var searchButton = $(".searchButton")
// var apiKey = ""
// var searchInput = ""
// var currentTempEl = $("#todaytemp")
// var currentUvEl = $("#uvindex")
// var currentDate = moment().format("M/D/YYYY")
// var cityName = ""
// var savedCities = JSON.parse(localStorage.getItem("savedCities")) || []
// var previousSearch = document.querySelector("#previous-search")

// Outdoor and indoor activity categories
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
        response.json().then(function (outdoorResult) {
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

  // Fetch indoor activity results
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
        response.json().then(function (indoorResult) {
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

  // Fetch restaurant results
function restaurantYelpApi(city) {
  
  // Cors-anywhere to utilize Yelp API which does not allow CORS
  // var restaurantSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=restaurants&sort_by=rating'

  // console.log(restaurantSearchUrl);

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

      // If response ok, render and display restaurant results
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

function hotelYelpApi (city) {
  
  // var hotelSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=hotels&sort_by=rating'

  // console.log(hotelSearchUrl)

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

// Call restaurant and hotel fetch functions 
// restaurantYelpApi("Irvine");
// hotelYelpApi("Irvine");

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
  cityRestaurantEl.text(`Top Rated Food Destinations in ${city}`)

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
  eatPriceEl.text(`Price: ${eatPrice}`);
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
  cityHotelEl.text(`Top Hotels in Irvine`)

  // display name into hotel card 
  hotelNameEl.text(hotelName);

  // display image URL hotel card 
  hotelImgEl.attr('src', hotelImg); 

  //  Clicking image links to Yelp review
  hotelUrlEl.attr('href', hotelUrl);

  // display rating into hotel card
  hotelRatingEl.text(`Rating: ${hotelRating} Stars`);

  // display price into hotel card
  hotelPriceEl.text(`Price: ${hotelPrice}`);
}

//render outdoor activities
function renderOutdoor (outdoorResult) {
  // var eatList = outdoorResult.businesses
  // var rndEatIndex = Math.floor(Math.random() * eatList.length)

  var outdoorName = outdoorResult[0].name
  var outdoorCategory = outdoorResult[0].categories[0].title
  var outdoorImg = outdoorResult[0].image_url
  var outdoorRating = outdoorResult[0].rating
  var outdoorPrice = outdoorResult[0].price
  var outdoorUrl = outdoorResult[0].url
  
  // diplay city name into Eat Card (placeholder of Irvine)
  cityOutdoorEl.text(`Top Rated Food Destinations in ${city}`)

  // display restaurant name into eat card
  outdoorNameEl.text(outdoorName);

  // display restaurant category into eat card 
  outdoorCategoryEl.text(`Category: ${outdoorCategory}`);

  // display image URL into eat card 
  outdoorImgEl.attr('src',outdoorImg); 


  // clicking image links to Yelp review
  outdoorUrlEl.attr('href', outdoorUrl);

  // diplay rating into eat card
  outdoorRatingEl.text(`Rating: ${outdoorRating}`);

  // diplay price into eat card
  outdoorPriceEl.text(`Price: ${outdoorPrice}`);
};

//render indoor activities
function renderIndoor (indoorResult) {
  // var eatList = outdoorResult.businesses
  // var rndEatIndex = Math.floor(Math.random() * eatList.length)

  var indoorName = indoorResult[0].name
  var indoorCategory = indoorResult[0].categories[0].title
  var indoorImg = indoorResult[0].image_url
  var indoorRating = indoorResult[0].rating
  var indoorPrice = indoorResult[0].price
  var indoorUrl = indoorResult[0].url
  
  // diplay city name into Eat Card (placeholder of Irvine)
  cityIndoorEl.text(`Top Rated Food Destinations in ${city}`)

  // display restaurant name into eat card
  indoorNameEl.text(indoorName);

  // display restaurant category into eat card 
  indoorCategoryEl.text(`Category: ${indoorCategory}`);

  // display image URL into eat card 
  indoorImgEl.attr('src',indoorImg); 


  // clicking image links to Yelp review
  indoorUrlEl.attr('href', indoorUrl);

  // diplay rating into eat card
  indoorRatingEl.text(`Rating: ${indoorRating}`);

  // diplay price into eat card
  indoorPriceEl.text(`Price: ${indoorPrice}`);
};


function fetchUrls (city) {
  hotelYelpApi(city);
  restaurantYelpApi(city);
  indoorYelpApi(city);
  outdoorYelpApi(city);
}
