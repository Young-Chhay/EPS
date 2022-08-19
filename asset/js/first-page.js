var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;
  console.log(searchInputVal);
  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
  console.log(searchInputVal);
  localStorage.setItem(searchInputVal[0].value, City)
  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
