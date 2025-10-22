const listaAsistencia = [
  { id: 'asistencia1', nombre: 'Centro Salud Norte', coordenadas: [51.503, -0.08], horario: '08:00 - 18:00' },
  { id: 'asistencia2', nombre: 'Centro Salud Sur', coordenadas: [51.506, -0.10], horario: '08:00 - 18:00' },
  { id: 'asistencia3', nombre: 'Centro de Camden', coordenadas: [51.5390, -0.1426], horario: '09:00 - 17:00' },
  { id: 'asistencia4', nombre: 'Centro de Westminster', coordenadas: [51.4975, -0.1357], horario: '08:00 - 20:00' },
  { id: 'asistencia5', nombre: 'Centro de Southbank', coordenadas: [51.5045, -0.1156], horario: '10:00 - 22:00' },
  { id: 'asistencia6', nombre: 'Centro de Shoreditch', coordenadas: [51.5265, -0.0787], horario: '07:30 - 19:30' },
  { id: 'asistencia7', nombre: 'Centro de Kensington', coordenadas: [51.4995, -0.1937], horario: '08:30 - 16:30' }
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


