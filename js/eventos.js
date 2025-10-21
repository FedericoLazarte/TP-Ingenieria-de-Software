const listaEventos = [
  { id: 'evento1', nombre: 'Obra teatral', lugar: 'Teatro Municipal', hora: '20:00', coordenadas: [51.507, -0.095] }
];

function mostrarEventos(lista = listaEventos) {
  const contenedor = document.getElementById('eventos');
  contenedor.innerHTML = '';

  if (!lista || lista.length === 0) { contenedor.style.display = 'none'; return; }

  contenedor.style.display = '';
  contenedor.innerHTML = '<h2>Eventos</h2>';
  lista.forEach(e => {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.dataset.id = e.id;
    tarjeta.innerHTML = `<h3>${e.nombre}</h3><p>${e.lugar} - ${e.hora}</p>`;
    tarjeta.onclick = () => centrarEnMarcador(e.id);
    contenedor.appendChild(tarjeta);
    agregarMarcador(e.id, e.coordenadas, e.nombre);
  });
}

