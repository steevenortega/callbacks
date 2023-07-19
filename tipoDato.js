function obtenerTipoYContenido(variable, callback) {
    const dato = typeof variable;
    const mensaje = `El tipo de dato de la variable es: ${dato} y El contenido de la variable es: ${variable}`;
    callback(mensaje);
  }
  obtenerTipoYContenido(8, console.log);
  obtenerTipoYContenido("Esto es un texto", console.log);
  obtenerTipoYContenido(true, console.log);

  export { obtenerTipoYContenido };