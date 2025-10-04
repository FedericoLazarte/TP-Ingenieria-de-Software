const listaEventos = [
  { id: 'evento1', nombre: 'Obra teatral', lugar: 'Teatro Municipal', hora: '20:00', coordenadas: [51.507, -0.095] }
];


function mostrarEventos() {
  const contenedor = document.getElementById('eventos');
  contenedor.innerHTML = '<h2>Eventos</h2>';
  listaEventos.forEach(e => {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.setAttribute('data-id', e.id); // para ver si funciona resaltado
    tarjeta.innerHTML = `<h3>${e.nombre}</h3><p>${e.lugar} - ${e.hora}</p>`;
    tarjeta.onclick = () => centrarEnMarcador(e.id);
    contenedor.appendChild(tarjeta);
    agregarMarcador(e.id, e.coordenadas, e.nombre);
  });
}


mostrarEventos();
