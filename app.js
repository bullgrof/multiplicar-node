const { createArchivo } = require('./multiplicar/multiplicar');

let base = 7;

createArchivo(base)
  .then(archivo => console.log(`Archivo Creado: ${archivo}`))
  .catch((e = console.log(e)));
