"use strict";

var numbers = [1, 2, 3, 4, 5, 6]; // forEach funciona para recorrer todo el arreglo, ejecuta una función por cada de los arreglos si encuentra el elemento ejecuta
// Imprimir cada numero del arreglo

function printValue(value) {
  console.log(value);
}

numbers.forEach(printValue); // soluciones no tan optimas

/* printValue(numbers[0]);
printValue(numbers[1]);
printValue(numbers[2]);
printValue(numbers[3]);
printValue(numbers[4]);

/* console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]); */