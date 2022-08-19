// Create a constant to toggle the Switch button.
const switchElement = document.querySelector('.switch')

// IF a click is made on the switch button, the dark mode will be toggled
switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
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
  // restaurantYelpApi(city);
  }
  var queryString = './second-page.html'

  // location.assign(queryString);
  fetchUrls (city);

  console.log(city);
}

searchFormEl.submit(handleSearchFormSubmit);
