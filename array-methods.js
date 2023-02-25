// Pop(): Elimina el último elemento de un arreglo

const emails = ["erik@academlo.com", "daniel@academlo.com", "andrea@academlo.com"];
console.log(emails);
emails.pop();
console.log(emails);

// Push(): Agregar un elemento al final de un arreglo

const emails1 = ["erik@academlo.com", "daniel@academlo.com", "andrea@academlo.com"];
console.log(emails1);
emails1.push("dannyh@academlo.com");
console.log(emails1);


// Shift(): Elimina el primer elemento de un arreglo

const emails2 = ["erik@academlo.com", "daniel@academlo.com", "andrea@academlo.com"];
console.log(emails2);
emails2.shift();
console.log(emails2);

// Unshift(): Agrega un elemento al inicio de un arreglo
const emails3 = ["erik@academlo.com", "daniel@academlo.com", "andrea@academlo.com"];
console.log(emails3);
emails3.unshift("dannyh@academlo.com");
console.log(emails3);

// Splice(): Permite agregar y eliminar elementos en cualquier posición del arreglo
const emails4 = ["erik@academlo.com", "daniel@academlo.com", "andrea@academlo.com"];
console.log(emails4);
emails4.splice(1, 0, "dannyh@gmail.com", "alejandro@hotmail.com" );  // primer espacio selecciona la posicion , segundo espacio cuantos elementos quiero eliminar, tercera posicion cuantos elementos quiero agregar 
console.log(emails4);

