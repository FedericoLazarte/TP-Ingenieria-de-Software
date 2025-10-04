const listaAsistencia = [
  { id: 'asistencia1', nombre: 'Centro Salud Norte', coordenadas: [51.503, -0.08], horario: '08:00 - 18:00' }
];


function mostrarAsistencia() {
  const contenedor = document.getElementById('asistencia');
  contenedor.innerHTML = '<h2>Centros de Asistencia</h2>';
  listaAsistencia.forEach(a => {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.setAttribute('data-id', a.id); // pra ver si funciona resaltado
    tarjeta.innerHTML = `<h3>${a.nombre}</h3><p>Horario: ${a.horario}</p>`;
    tarjeta.onclick = () => centrarEnMarcador(a.id);
    contenedor.appendChild(tarjeta);
    agregarMarcador(a.id, a.coordenadas, a.nombre);
  });
}

mostrarAsistencia();
