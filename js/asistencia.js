const listaAsistencia = [
  { id: 'asistencia1', nombre: 'Centro Salud Norte', coordenadas: [51.503, -0.08], horario: '08:00 - 18:00' },
  { id: 'asistencia2', nombre: 'Centro Salud Sur', coordenadas: [51.506, -0.10], horario: '08:00 - 18:00' }
];

function mostrarAsistencia(lista = listaAsistencia) {
  const contenedor = document.getElementById('asistencia');
  contenedor.innerHTML = '';

  if (!lista || lista.length === 0) { contenedor.style.display = 'none'; return; }

  contenedor.style.display = '';
  contenedor.innerHTML = '<h2>Centros de Asistencia</h2>';
  lista.forEach(a => {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.dataset.id = a.id;
    tarjeta.innerHTML = `<h3>${a.nombre}</h3><p>Horario: ${a.horario}</p>`;
    tarjeta.onclick = () => centrarEnMarcador(a.id);
    contenedor.appendChild(tarjeta);
    agregarMarcador(a.id, a.coordenadas, a.nombre);
  });
}


