function operacionesMatematicas(num1, num2, callback) {
    if (typeof callback === 'function') {
      const resultado = callback(num1, num2);
      console.log(`El resultado es: ${resultado}`);
    } else {
      throw new Error('No es una función');
    }
  }  
 
  const suma = (a, b) => a + b;
  const resta = (a, b) => a - b;
  const multiplicacion = (a, b) => a * b;
  const division = (a, b) => a / b;

  operacionesMatematicas(5, 3, suma); 
  operacionesMatematicas(5, 3, resta); 
  operacionesMatematicas(5, 3, multiplicacion); 
  operacionesMatematicas(6, 2, division); 
  
  export { operacionesMatematicas };
  