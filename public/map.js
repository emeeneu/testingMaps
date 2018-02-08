$(document).ready(function () {
  startMap();
  console.log("map", map)
});


var geocoder = new google.maps.Geocoder();

function geocodeAddress(map) {
  var address = document.getElementById('address').value;
  
  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status === 'OK') {
      // console.log(results[0].geometry.location);
      $('#latitude').val(results[0].geometry.location.lat);
      $('#longitude').val(results[0].geometry.location.lng);
    
      var latitude = parseFloat($('#latitude').val());
      var longitude = parseFloat($('#longitude').val());

      var myMarker = new google.maps.Marker({
        position: {
          lat: latitude,
          lng: longitude
        },
        map: map,
        title: "name",
      })
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function startMap() {
  var restaurantsMap = {
    lat: 41.3977381,
    lng: 2.190471916
  };
  var map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: restaurantsMap
    }
  );

  // ajax call a /api devuelve los restaurants, y haces un for each para mostrar todas las marcas.

  $('#geocode').on('submit', function (event) {
    event.preventDefault();
    geocodeAddress(map);
  })
}