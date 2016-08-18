var locationBtn = document.getElementById('location');
var resultsDiv = document.getElementById('results');
function getLocation() {
  if ("geolocation" in navigator) {
    locationBtn.addEventListener('click', function(){
      navigator.geolocation.getCurrentPosition(success, fail);
    });
  }
  else {
    resultsDiv.innerHTML = 'This Browser does not support GeoLocation';
  };
};



function success(position){
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude +"," + longitude + "&sensor=true";
  $.getJSON(url).done(function(data){
    resultsDiv.innerHTML = data.results[0].formatted_address;
  });
};

function fail(error) {
    resultsDiv.innerHTML = 'Unable to get your location due to the following: Error Code' + error.code + " - " + error.message;
    console.log(error.code);
    console.log(error.message);
};


getLocation();
