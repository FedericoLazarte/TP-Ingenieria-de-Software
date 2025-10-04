var mapa = L.map('mapa').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

var marcadores = {}

function agregarMarcador(id, coordenadas, texto) {
  let marcador = L.marker(coordenadas).addTo(mapa)
  .bindPopup(texto);
  marcador.on('click', () => { 
    resaltarTarjeta(id);
//    resaltarMarcador(id);
  });
  marcadores[id] = marcador;
}

function centrarEnMarcador(id) {
  let marcador = marcadores[id];
  if (marcador) {
    mapa.setView(marcador.getLatLng(), 15);
    marcador.openPopup();
    resaltarTarjeta(id); // Agregado para ver si funciona
 //   resaltarMarcador(id);
  }
}

// Probando si salta tarjeta 
function resaltarTarjeta(id) {
  document.querySelectorAll('.tarjeta').forEach(t => t.classList.remove('seleccionada'));
  const tarjeta = document.querySelector(`[data-id='${id}']`);
  if (tarjeta) {
    tarjeta.classList.add('seleccionada');
    tarjeta.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/*
function resaltarMarcador(id) {
  Object.values(marcadores).forEach(m => m.setIcon(iconoNormal));
  let marcador = marcadores[id];
  if (marcador) {
    marcador.setIcon(iconoSeleccionado);
  }
}
*/
