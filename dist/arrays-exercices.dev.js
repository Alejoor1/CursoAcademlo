"use strict";

//  1. averiguar si los correos dentro del arreglo pertenecen a academlo
//  erik@academlo.com
//  daniel@gmail.com
//  si el texto termina con academlo.com pertenece a academlo
var emails = ["erik@academlo.com", "daniel@gmail.com"];
var firstEmail = emails[0];
console.log(firstEmail.endsWith("academlo.com"));
var secondEmail = emails[1];
console.log(secondEmail.endsWith("academlo.com")); // console.log(emails.endsWith("academlo.com"));
//  2. encuentra el tamaño de la primer palabra de un string

var texts = ["Hoy es lunes", "Tengo que descansar"];
console.log(texts[0].indexOf(" "));
console.log(texts[1].indexOf(" ")); //  3. encuentra el tamaño de la ultima palabra de un string

var texts1 = ["Hoy es lunes", "Tengo que descansar"];
console.log(texts1[0].lastIndexOf(" "));
console.log(texts1[1].lastIndexOf(" "));
console.log("SOS UNA PERRA"); //  4. encuentra el tamaño de la ultima palabra de un string

var texts2 = ["Hoy es lunes", "Tengo que descansar"];
console.log(texts2[1].lastIndexOf(" "));