function actualizarCentros() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.7) {
      resolve("Actualización exitosa");
    } else {
      reject("Error en la actualización");
    }
  });
}

function iniciarActualizacion() {
  actualizarCentros()
/*     .then(msg => console.log(msg))
    .catch(err => {
      console.error(err);
      alert("Se enviará correo a la coordinación: " + err);
      window.location.href = `mailto:coordinacion@turismo.com?subject=Error%20en%20actualización&body=${encodeURIComponent(err)}`;
    }); */
}

iniciarActualizacion();

