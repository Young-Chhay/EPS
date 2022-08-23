// moment statement for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// const yelpApi = {
//   key : '6BU5omcQhPToYfC0TRPt0h5hsphV-BaAn78l-elZXw779LTTD76ltEou8kp75L7_A7wwuKfhfpY48qIRoKKdGHd6-Xq94c8sTdZlDuMytEwRdedCNrN8KOpTQE_8YnYx',
// };

// const weatherApi = {
//   key : '81dbd64740ac5b0c8f53234967959bd9'
// };

var searchButton = $("btn");
var searchInput = "";
var switchElement = $('switch-element');
// weather variables
var liveWeather = $(".weathericon");
var liveTempEl = $("#todaytemp");
var currentDate = moment().format("M/D/YYYY");
var cityName = "";

// 5 day forecast display
// var dailyDivs = [$('#day-1-div'), $('#day-2-div'), $('#day-3-div'), $('#day-4-div'), $('#day-5-div')];

// eat variables
var cityRestaurantEl = $('#city-restaurant')
var eatNameEl = $('#eat-name')
var eatCategoryEl = $('#eat-category')
var eatImgEl = $("#eat-img")
var eatRatingEl = $("#eat-rating")
var eatPriceEl = $("#eat-price")
var eatUrlEl = $("#eat-url")
var eatRefresh = $("#eat-refresh")

// outdoor play activity variables 
var playHeaderEl = $("#play-header")
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

// indoor play activity variables
var playHeaderTwoEl = $("#play-header-two")
var playNameFourEl = $("#play-name-four")
var playCategoryFourEl = $('#play-category-four')
var playImgFourEl = $("#play-img-four")
var playRatingFourEl = $("#play-rating-four")
var playPriceFourEl = $("#play-price-four")
var playUrlFourEl = $("#play-url-four")

var playNameFiveEl = $('#play-name-five')
var playCategoryFiveEl = $('#play-category-five')
var playImgFiveEl = $("#play-img-five")
var playRatingFiveEl = $("#play-rating-five")
var playPriceFiveEl = $("#play-price-five")
var playUrlFiveEl = $("#play-url-five")

var playNameSixEl = $('#play-name-six')
var playCategorySixEl = $('#play-category-six')
var playImgSixEl = $("#play-img-six")
var playRatingSixEl = $("#play-rating-six")
var playPriceSixEl = $("#play-price-six")
var playUrlSixEl = $("#play-url-six")

// stay variables
var cityHotelEl = $('#city-hotel')
var hotelNameEl = $("#hotel-name")
var hotelImgEl = $("#hotel-img")
var hotelRatingEl = $("#hotel-rating")
var hotelPriceEl = $("#hotel-price")
var hotelUrlEl = $("#hotel-url")
var searchFormEl = $('#search-form');

// IF a click is made on the switch button, the dark mode will be toggled
switchElement.click, () => {
  document.body.classList.toggle('dark')
}
// Search button feature
function getWeather (city) {

    // 5 day forecast
    var cityFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&Appid=" + weatherApi.key + "&units=imperial";

    fetch(cityFiveDay)
    .then(function (response) { 
      if (response.ok) {
        response.json().then(function (fiveDayResponse) {
   
         // 5 day display forecast array
         var day = [0, 8, 16, 24, 32];
         // var fiveDayForecast = $(".fiveDayForecast");
         var fiveDayDisplay = $(".fiveDayOne");
         fiveDayDisplay.empty();
         // weather forecast and dates for the next 5 days
         day.forEach(function (i) {
           var FiveDayTimeUTC1 = new Date(fiveDayResponse.list[i].dt * 1000);
           FiveDayTimeUTC1 = FiveDayTimeUTC1.toLocaleDateString("en-US");
           fiveDayDisplay.append("<div class= fiveDayColor>" + "<p>" + FiveDayTimeUTC1 + "</p>" + `<img src="https://openweathermap.org/img/wn/${fiveDayResponse.list[i].weather[0].icon}@2x.png">`
           + "<p>" + "Temperature: " + fiveDayResponse.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + fiveDayResponse.list[i].main.humidity + "%" + "</p>"
           + "<p>" + "Wind Speed: " + fiveDayResponse.list[i].wind.speed + "</p>" + "</div>");
          });
    })
    } else {
      alert('Error: ' + fiveDayResponse.statusText);
    }
    })
    .catch(function (e) {
    console.log(e);
    });
    }

// outdoor and indoor activity categories
var outdoorCategories = ['hiking', 'beaches', 'amusementparks', 'zoos', 'farms', 'stadiumsarenas', 'wineries', 'parks', 'mini_golf']
var indoorCategories = ['rock_climbing', 'axethrowing', 'aquariums', 'arcades', 'escapegames', 'trampoline', 'museums', 'theater', 'virtualrealitycenters']

// randomize play activities
function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

// fetch outdoor activity results
function outdoorYelpApi(city) {
  
  // Randomly take 3 categories from outdoorCategories array
  var randomOutDoorCategories = getMultipleRandom(outdoorCategories, 3);

  // Assign each category a variable
  var outdoorOne = randomOutDoorCategories[0]
  var outdoorTwo = randomOutDoorCategories[1]
  var outdoorThree = randomOutDoorCategories[2]

  var outdoorSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=' + outdoorOne + '&categories=' + outdoorTwo + '&categories=' + outdoorThree

  console.log(outdoorSearchUrl)
  console.log('outdoor activities loading')
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

// fetch indoor activity results
function indoorYelpApi(city) {

  var randomIndoorCategories = getMultipleRandom(indoorCategories, 3);

  // Assign each category a variable
  var indoorOne = randomIndoorCategories[0]
  var indoorTwo = randomIndoorCategories[1]
  var indoorThree = randomIndoorCategories[2]

  var indoorSearchUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=' + city + '&categories=' + indoorOne + '&categories=' + indoorTwo + '&categories=' + indoorThree

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

  // fetch restaurant results
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

// display eat results to HTML
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
  // eatRefresh.on('click', renderRestaurants(eatResults));
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

// dender outdoor activities
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

  playHeaderEl.text('Outdoor Activities')

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

  if (!outdoorPriceThree) {
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

  playHeaderTwoEl.text('Indoor Activities');

  // display activity name into play card
  playNameFourEl.text(indoorNameOne);

  // display activity category into play card 
  playCategoryFourEl.text(`Category: ${indoorCategoryOne}`);

  // display image URL into play card 
  playImgFourEl.attr('src',indoorImgOne); 

  // clicking image links to Yelp review
  playUrlFourEl.attr('href', indoorUrlOne);

  // diplay rating into play card
  playRatingFourEl.text(`Rating: ${indoorRatingOne}`);

  // diplay price into play card if activity costs money
  if (!indoorPriceOne) {
    playPriceFourEl.text("");
  } else {
  playPriceFourEl.text(`Price: ${indoorPriceOne}`);
  }

  // indoor activity two
  var indoorNameTwo = indoorList[1].name
  var indoorCategoryTwo = indoorList[1].categories[0].title
  var indoorImgTwo = indoorList[1].image_url
  var indoorUrlTwo = indoorList[1].url
  var indoorRatingTwo = indoorList[1].rating
  var indoorPriceTwo = indoorList[1].price

  playNameFiveEl.text(indoorNameTwo);

  playCategoryFiveEl.text(`Category: ${indoorCategoryTwo}`);

  playImgFiveEl.attr('src', indoorImgTwo); 

  playUrlFiveEl.attr('href', indoorUrlTwo);

  playRatingFiveEl.text(`Rating: ${indoorRatingTwo}`);

  if (!indoorPriceTwo) {
    playPriceFiveEl.text("");
  } else {
  playPriceFiveEl.text(`Price: ${indoorPriceTwo}`);
  }
 
  // indoor activity one
  var indoorNameThree = indoorList[2].name
  var indoorCategoryThree = indoorList[2].categories[0].title
  var indoorImgThree = indoorList[2].image_url
  var indoorUrlThree = indoorList[2].url
  var indoorRatingThree = indoorList[2].rating
  var indoorPriceThree = indoorList[2].price

  playNameSixEl.text(indoorNameThree);

  playCategorySixEl.text(`Category: ${indoorCategoryThree}`);

  playImgSixEl.attr('src',indoorImgThree); 

  playUrlSixEl.attr('href', indoorUrlThree);

  playRatingSixEl.text(`Rating: ${indoorRatingThree}`);

  if (!indoorPriceOne) {
    playPriceSixEl.text("");
  } else {
  playPriceSixEl.text(`Price: ${indoorPriceThree}`);
  }
};

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = $('#search-input').val();

  if (!searchInputVal) {
    return;
  } else {

  var city = searchInputVal
  localStorage.setItem('cities', city);
  getWeather(city);
  restaurantYelpApi(city);
  hotelYelpApi(city);
  outdoorYelpApi(city);
  indoorYelpApi(city);
  }
}

searchFormEl.submit(handleSearchFormSubmit);