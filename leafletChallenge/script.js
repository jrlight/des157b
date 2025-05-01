(function(){
    'use strict';

    var map = L.map('map').setView([33.880722, -118.365820], 18);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([33.880722, -118.365820]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    var polygon = L.polygon([
        [33.88109,-118.365826],
        [33.88109,-118.365670],
        [33.88089,-118.365670],
        [33.88089,-118.365820]
    ]).addTo(map);
}());