
// set the information so the next page can make use of them, and they can be remembered
function setInformation() {
  var radius = document.getElementById("distanceRange");
  sessionStorage.setItem('radius', radius);

  var price = document.getElementById("priceRange");
  sessionStorage.setItem('price', price);
}

// fetch the information or set the default inputs
function getInformation() {
  var radius = sessionStorage.getItem('radius') || 5000;
  var price = sessionStorage.getItem('price') || 2;
}

// creates a distance slider with minimum range of 1 KM and max 20 KM
function createDistanceSlider() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "range");
  x.id = "distanceRange";
  x.min = 1000; // meters
  x.max = 20000; // meters
  document.body.appendChild(x);
}

// creates a price slider, with 3 levels: $, $$, and $$$
function createPriceSlider() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "range");
  x.id = "priceRange";
  x.min = 0;
  x.max = 2;
  document.body.appendChild(x);
}
