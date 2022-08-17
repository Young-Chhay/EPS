console.log(api.key);

console.log(`https://api.yelp.com/v3/businesses/search`);

// Searchbar function
var searchFormEl = $('#search-form');

function handleSearchFormSubmit(e) {
  e.preventDefault();

  var searchInputVal = $('#search-input').val();

  if (!searchInputVal) {
    console.log('You need a search input value!');
    return;
  }

  var city = searchInputVal;
  searchApi(city);
}

searchFormEl.submit(handleSearchFormSubmit);

// Call Yelp Api for Top Outdoor Restaurant 

var Outdoors = [{
    name: "Waterpark",
    inout: "outdoors",
    yelpID: "quroiwefjlk43ef34",
},
]
