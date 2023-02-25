// 1. averiguar si el correo de un usuario pertenece a academlo
    // erik@academlo.com
    // daniel@gmail.com
    // si el texto termina con academlo.com pertenece a academlo
const email = "daniel@mail.com";
const email2 = "erik@academlo.com";

console.log(email.endsWith("academlo.com"));
console.log(email2.endsWith("academlo.com"));

// 2. encuentra el tamaño de la primer palabra de un string
const text = "tengo 10 años";
console.log(text.indexOf(" "));

// 3. encuentra el tamaño de la segunda palabra de un string
const texto1 = "tengo 10 años";
const palabra = texto1.split(" ");
const segundapalabra = palabra[1];
const tamanoSegundaPalabra = segundapalabra.length;
console.log(tamanoSegundaPalabra);


// 4. encuentra el tamaño de la ultima palabra de un string
const texto2 = "tengo 10 años";
const palabra1 = texto2.split(" ");
const tercerapalabra = palabra1[2];
const tamanoterceraPalabra = tercerapalabra.length;
console.log(tamanoterceraPalabra);

// split para divir una palabra en frases 
console.log(palabra.slice('',3))