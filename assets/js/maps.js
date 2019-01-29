function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 51.5012103,
            lng: -0.1630554
        }
    });
    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    var locations = [{
        lat: 51.5226411,
        lng: -0.155674 
    }, {
        lat: 51.3761418,
        lng: -0.1679548 
    }];
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
