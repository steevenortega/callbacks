function mensajeEnConsola(mensaje, callback) {

    callback(mensaje);
  } 

  mensajeEnConsola("Mensaje de log", console.log);
  mensajeEnConsola("Mensaje de advertencia", console.warn);
  mensajeEnConsola("Mensaje de información", console.info);
  export { mensajeEnConsola };