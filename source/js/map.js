const LOCATION = {
  lat: 59.968362,
  lng: 30.317559,
};

const VIEW_ZOOM = 18;

const MAIN_PIN_ICON = L.icon({
  iconUrl: 'img/map/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [18, 50],
});

const mapSection = document.querySelector('.map');
mapSection.classList.remove('map--nojs');

const map = L.map('map-canvas').setView(LOCATION, VIEW_ZOOM);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker(LOCATION, {icon: MAIN_PIN_ICON}).addTo(map);
