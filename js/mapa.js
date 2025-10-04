var mapa = L.map('mapa').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

var marcadores = {}

function agregarMarcador(id, coordenadas, texto) {
  let marcador = L.marker(coordenadas).addTo(mapa)
  .bindPopup(texto);
  marcador.on('click', () => resaltarTarjeta(id));
  marcador[id] = marcador;
}

function centrarEnMarcador(id) {
  let marcador = marcadores[id];
  if (marcador) {
    mapa.setView(marcador.getLatLng(), 15);
    marcador.openPopup();
  }
}
