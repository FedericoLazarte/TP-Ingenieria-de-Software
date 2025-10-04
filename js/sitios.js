const listaSitios = [
  { id: 'sitio1', nombre: 'Plaza Central', descripcion: 'Lugar histórico.', coordenadas: [51.505, -0.09] },
  { id: 'sitio2', nombre: 'Museo de Arte', descripcion: 'Colección de arte local.', coordenadas: [51.51, -0.1] }
];

function mostrarSitios() {
  const contenedor = document.getElementById('sitios');
  contenedor.innerHTML = '<h2>Sitios de Interés</h2>';
  listaSitios.forEach(s => {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.setAttribute('data-id', s.id); // Par resltar tarjeta 
    tarjeta.innerHTML = `<h3>${s.nombre}</h3><p>${s.descripcion}</p>`;
    tarjeta.onclick = () => centrarEnMarcador(s.id);
    contenedor.appendChild(tarjeta);
    agregarMarcador(s.id, s.coordenadas, s.nombre);
  });
}

mostrarSitios();
