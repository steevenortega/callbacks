function convertirCadena(txtEvaluar, esMayuscula, callback) {
    if (typeof callback === 'function') {
      const resultado = esMayuscula ? txtEvaluar.toUpperCase() : txtEvaluar.toLowerCase();
      callback(resultado);
    } else {
      throw new Error('El tercer argumento debe ser una función');
    }
  }
  const txt = 'texto EJEMPLO';
  
  convertirCadena(txt, true, resultado => {
    console.log(resultado); 
  });
  
  convertirCadena(txt, false, resultado => {
    console.log(resultado); });	

    export { convertirCadena };