"use strict";

// && - significa y
// || - significa o
var user = {
  name: "erik",
  age: 30,
  gender: "male"
}; // para ser aceptado tiene que ser mayor a 18 años
// si es hombre el mensaje seria "Bienvenido"
// si es hombre el mensaje seria "Bienvenida"
// averiguar si fue aceptado y si es hombre o mujer

var accepted = user.age > 18;
var man = user.gender === "male"; // && se tienen que cumplir todas la condiciones para que el resultado sea true
// si alguna de las condiciones no se cumple, el resultado sera false

var acceptedAndMan = user.age > 18 && user.gender === "male";
var acceptedAndWomen = user.age > 18 && user.gender === "women";
console.log(acceptedAndMan);
console.log(acceptedAndWomen); // || se tiene que cumplir alguna de las condiciones para que sea true
// si no se cumple ninguna de las condiciones sera false

var acceptedAndMan2 = user.age > 18 || user.gender === "male";
var acceptedAndWomen2 = user.age > 18 || user.gender === "women";
console.log(acceptedAndMan2);
console.log(acceptedAndWomen2);