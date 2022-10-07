"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = [];
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - 1; j++)
      if (array[j] > array[j + 1]) {
        aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
  }
  return array;
}
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // [5, 1, 4, 2, 8]
  //  j  i

  // for (var i = 1; i < array.length; i++) {
  //   var aux = array[i];
  //   var j = i-1;
  //   for (var j = 0; j < array.length; j--) {

  //   }
  // }

  for (let i = 1; i < array.length; i++) {
    // First, choose the element at index 1
    let current = array[i];
    let j;

    // Loop from right to left, starting from i-1 to index 0
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      // as long as arr[j] is bigger than current
      // move arr[j] to the right at arr[j + 1]
      var aux = array[j + 1];
      array[j + 1] = array[j];
      array[j] = aux;
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  var min;
  var posicion;
  var arrayFinal = [];
  while (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      min = array[i];
      if (array[i] < array[min]) {
        min = 
      }
    }
    arrayFinal.push(min);
    array.splice(posicion, 1);
  }
  return arrayFinal;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
