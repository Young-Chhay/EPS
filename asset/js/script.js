console.log(api.key);

console.log(`https://api.yelp.com/v3/businesses/search`);

// Moment statement for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
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

var outdoorCategories = ['hiking', 'beaches', 'amusementparks', 'zoos', 'farms', 'stadiumsarenas', 'wineries', 'parks', 'mini_golf']

var indoorCategories = ['rock_climbing', 'axethrowing', 'aquariums', 'arcades', 'escapegames', 'shopping', 'trampoline', 'museums', 'theater', 'virtualrealitycenters']

function outdoorYelpApi(city) {
  
  // TO DO: Randomize 3 outdoor and define variables
  randomOutdoor = outdoorCategories.sort( function() { Math.random() + .5 }); 
  randomIndoor = indoorCategories.sort( function() { Math.random() + .5 });
  
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