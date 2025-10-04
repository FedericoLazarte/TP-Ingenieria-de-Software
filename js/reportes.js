const formReporte = document.getElemetById('form-reporte');

formReporte.addEventListener('submit', function(e) {
  e.preventDefault();
  const reporte = {
    lugar: document.getElemetById('lugar').value,
    fecha: document.getElemetById('fecha').value,
    detalle: document.getElemetById('detalle').value,
    nombre: document.getElemetById('nombre').value,
    email: document.getElemetById('email').value
  };
  console.log("Reporte Enviado:", reporte);
  alert("Reporte Enviado Correctamente");
  formReporte.reset();
});
