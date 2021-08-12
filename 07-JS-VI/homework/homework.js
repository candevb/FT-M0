// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}
/*
var arr = nombre.split("");
arr[0] = arr[0].toUpperCase();
return arr.join("");

*/


/*function mayuscula(nombre) {
    var letra = nombre[0];
    var mayuscula = nombre[0].toUpperCase();
    return nombres.replace(letra, mayuscula);
}
*/

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // ejem: [2,5,7]---14
  //        cb(14)
  //Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sumarArray = numeros.reduce (function(acumulador, elemento){
    return acumulador + elemento;
  },0);
  cb(sumarArray);

  /* alternativa:
   suma = 0;
    numeros.forEach(function(elementos){
        suma = suma + elementos;
        return suma;
    })
    cb(suma);
    */
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
   array.forEach(function(elemento){
    cb(elemento)
  })

  /* alternativa
   array.forEach(cb)
  */

  }

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  
  var nuevoArr = array.map(function(elementos){
    return cb(elementos);
  })
return nuevoArr;
}

/*
var arr = array.map(cb);

*/

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  var filtrado = array.filter(function(elementos){
  return elementos.charAt(0)==="a"
})
return filtrado;  

/*
var arr = array.filter(function(elemento){
  return elemento[0] === "a"
})

*/
  
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
