const formReporte = document.getElementById('form-reporte');

formReporte.addEventListener('submit', function(e) {
  e.preventDefault();

  const reporte = {
    lugar: document.getElementById('lugar').value,
    fecha: document.getElementById('fecha').value,
    detalle: document.getElementById('detalle').value,
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value
  };

  console.log("Reporte Enviado:", reporte);
  alert("Reporte enviado correctamente. ¡Gracias por su colaboración!");
  formReporte.reset();
});

