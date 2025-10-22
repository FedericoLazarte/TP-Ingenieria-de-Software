const inputBusqueda = document.getElementById('input-busqueda');
const btnBuscar = document.getElementById('btn-buscar');
const panelInfo = document.getElementById('panel-info');

function normalizar(texto = '') {
  return texto
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '').trim();
}

function detectarCategorias(query) {
  const q = normalizar(query);
  const res = { sitios: false, eventos: false, asistencia: false };

  const clavesSitios = ['sitio', 'sitios', 'atractivo', 'atractivos', 'lugar', 'lugares'];
  const clavesEventos = ['evento', 'eventos', 'obra', 'teatro', 'cine', 'funcion', 'funciones', 'ciclo'];
  const clavesAsistencia = ['asistencia', 'asistencias', 'centro', 'centros', 'movil', 'móvil', 'primeros auxilios', 'auxilios', 'salud'];

  if (clavesSitios.some(k => q.includes(k))) res.sitios = true;
  if (clavesEventos.some(k => q.includes(k))) res.eventos = true;
  if (clavesAsistencia.some(k => q.includes(k))) res.asistencia = true;

  return res;
}

function buscarPorTexto(q) {
  const texto = normalizar(q);
  const sitios = (typeof listaSitios !== 'undefined') ? listaSitios.filter(s => {
    return normalizar(s.nombre).includes(texto) ||
      (s.descripcion && normalizar(s.descripcion).includes(texto));
  }) : [];

  const eventos = (typeof listaEventos !== 'undefined') ? listaEventos.filter(e => {
    return normalizar(e.nombre).includes(texto) ||
      (e.lugar && normalizar(e.lugar).includes(texto)) ||
      (e.desc && normalizar(e.desc).includes(texto));
  }) : [];

  const asistencia = (typeof listaAsistencia !== 'undefined') ? listaAsistencia.filter(a => {
    return normalizar(a.nombre).includes(texto) ||
      (a.horario && normalizar(a.horario).includes(texto));
  }) : [];

  return { sitios, eventos, asistencia };
}

btnBuscar.addEventListener('click', () => {
  const consultaRaw = inputBusqueda.value || '';
  const consulta = normalizar(consultaRaw);

  // Si la búsqueda está vacía, marcar visualmente el input en lugar de usar alert
  if (!consulta) {
    inputBusqueda.classList.add('input-error');
    inputBusqueda.focus();
    return;
  }

  if (typeof limpiarMarcadores === 'function') limpiarMarcadores();

  const categorias = detectarCategorias(consultaRaw);

  let sitiosFiltrados = [];
  let eventosFiltrados = [];
  let asistenciaFiltrada = [];

  if (categorias.sitios || categorias.eventos || categorias.asistencia) {
    if (categorias.sitios && typeof listaSitios !== 'undefined') sitiosFiltrados = listaSitios.slice();
    if (categorias.eventos && typeof listaEventos !== 'undefined') eventosFiltrados = listaEventos.slice();
    if (categorias.asistencia && typeof listaAsistencia !== 'undefined') asistenciaFiltrada = listaAsistencia.slice();
    const palabras = consulta.split(/\s+/).filter(Boolean);
    if (palabras.length > 1) {
      const resultadoTexto = buscarPorTexto(consulta);
      if (categorias.sitios) sitiosFiltrados = resultadoTexto.sitios;
      if (categorias.eventos) eventosFiltrados = resultadoTexto.eventos;
      if (categorias.asistencia) asistenciaFiltrada = resultadoTexto.asistencia;
    }
  } else {
    const r = buscarPorTexto(consulta);
    sitiosFiltrados = r.sitios;
    eventosFiltrados = r.eventos;
    asistenciaFiltrada = r.asistencia;
  }

  const hayResultados = (sitiosFiltrados.length + eventosFiltrados.length + asistenciaFiltrada.length) > 0;

  if (!hayResultados) {
    alert('No se encontraron resultados para: ' + consultaRaw);
    panelInfo.classList.add('oculto');
    if (typeof mostrarSitios === 'function') mostrarSitios([]);
    if (typeof mostrarEventos === 'function') mostrarEventos([]);
    if (typeof mostrarAsistencia === 'function') mostrarAsistencia([]);
    return;
  }
  panelInfo.classList.remove('oculto');
  if (typeof mostrarSitios === 'function') mostrarSitios(sitiosFiltrados);
  if (typeof mostrarEventos === 'function') mostrarEventos(eventosFiltrados);
  if (typeof mostrarAsistencia === 'function') mostrarAsistencia(asistenciaFiltrada);

  const primer = (sitiosFiltrados[0] || eventosFiltrados[0] || asistenciaFiltrada[0]);
  if (primer && primer.id) {
    setTimeout(() => {
      if (typeof marcadores !== 'undefined' && marcadores[primer.id]) {
        mapa.setView(marcadores[primer.id].getLatLng(), 13);
      }
    }, 50);
  }
});


document.getElementById('btn-cerrar-panel').addEventListener('click', function() {
  panelInfo.classList.add('oculto');
  inputBusqueda.value = '';
  inputBusqueda.classList.remove('input-error');

  if (typeof limpiarMarcadores === 'function') limpiarMarcadores();
  if (typeof mostrarSitios === 'function') mostrarSitios(listaSitios || []);
  if (typeof mostrarEventos === 'function') mostrarEventos(listaEventos || []);
  if (typeof mostrarAsistencia === 'function') mostrarAsistencia(listaAsistencia || []);
});

// Quitar la clase de error cuando el usuario escribe
inputBusqueda.addEventListener('input', function() {
  if (this.value && this.value.trim() !== '') {
    this.classList.remove('input-error');
  }
});
