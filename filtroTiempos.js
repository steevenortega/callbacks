function cantidadesMayoresA2Horas(array, callback) {
    if (typeof callback === 'function') {
      const cantidadesMayores = array.filter(cantidad => cantidad > 120);
      callback(cantidadesMayores);
    } else {
      throw new Error('El segundo argumento debe ser una función');
    }
  }    
  const tiempos = [120, 80, 200, 100];  
  cantidadesMayoresA2Horas(tiempos, resultado => {
    console.log(`Los unicos valores que superan los 2 minutos son los siguientes: ${resultado}`); 
  });	
	
  export { cantidadesMayoresA2Horas };