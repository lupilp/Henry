"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}
function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let nodo = new Node(value); // GUARDO EN UNA VARIABLE EL NUEVO NODO
  let current = this.head; // GUARDO EN UNA VAR EL PRIMER NODO (HEAD)

  if (current === null) {
    // PREGUNTO SI CURRENT TIENE HEAD
    this.head = nodo; // SI NO TIENE, LE AGREGO EL PRIMER NODO EN EL THIS.HEAD
    return;
  }
  while (current.next) {
    // RECORRO LA LISTA
    current = current.next;
  }
  current.next = nodo; // EN EL ULTIMO NODO LE AGREGO EL NUEVO NODO
};
LinkedList.prototype.remove = function () {
  let current = this.head;
  if (current === null) {
    // SI NO TIENE NODO (HEAD), RETORNO NULL
    return null;
  }
  if (current.next === null) {
    // SI ES UNA LISTA CON 1 SOLO NODO (ES DECIR SU NEXT SEA NULL)
    var aux2 = current.value; // ME GUARDO EL VALOR DEL NODO
    this.head = null; // VUELVO A PONER EL HEAD EN NULL
    return aux2; // RETORNO EL VALOR DEL NODO QUE BORRÉ
  }
  while (current.next.next !== null) {
    // RECORRO HASTA EL PENULTIMO ELEMENTO (CUANDO ES NULL EL SIGUIENTE A MI, SE FRENA)
    current = current.next;
  }
  let aux = current.next.value; // ME GUARDO EL VALOR DEL ULTIMO ELEMENTO
  current.next = null; // CAMBIO EL NEXT DEL PENULTIMO A NULL PARA ELIMINAR EL ULTIMO
  return aux; // RETORNO EL VALOR DEL ULTIMO
};
LinkedList.prototype.search = function (value) {
  let current = this.head;

  if (current.value === value) {
    // ESTO ESTÁ POR SI LA LINKEDLIST TIENE UN SOLO NODO
    let resultado = current.value;
    return resultado;
  }
  if (typeof value === "function") {
    // ESTO ESTÁ POR SI LA LINKEDLIST TIENE UN SOLO NODO
    if (value(current.value) === true) {
      let resultado = current.value;
      return resultado;
    }
  }
  while (current) {
    // MIENTRAS HAYA UN CURRENT, SIGUE
    if (typeof value === "function") {
      // PREGUNTO SI EL PARAMETRO QUE ME PASAN ES UNA FUNCION
      if (value(current.value) === true) {
        //VALUE ES LA FUNCION-LA COMPARO CON EL VALUE DEL NODO
        let resultado = current.value;
        return resultado;
      }
    }

    if (current.value === value) {
      // AQUI COMPARO MI VALUE DEL NODO CON EL VALUE ARGUMENTO
      let resultado = current.value;
      return resultado;
    }
    current = current.next; // ESTE ES PARA QUE FUNCIONE EL WHILE
  }
  return null; // SI NO TIENE NADA, RETORNA NULL
};
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (value) {
  let num = 0;
  let resultado = 0;

  for (var i = 0; i < value.length; i++) {
    num = num + value[i].charCodeAt();
    resultado = num % this.numBuckets;
  }
  return resultado;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") {
    throw new TypeError("Key must be a string");
  }
  var num = this.hash(key);
  if (!this.buckets[num]) {
    this.buckets[num] = {};
  }
  this.buckets[num][key] = value;
};

HashTable.prototype.get = function (key) {
  var num = this.hash(key);
  return this.buckets[num][key];
  8;
};

HashTable.prototype.hasKey = function (key) {
  var num = this.hash(key);
  return this.buckets[num].hasOwnProperty(key);
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
