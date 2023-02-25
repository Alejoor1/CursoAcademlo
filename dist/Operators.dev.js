"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var age = 30;
var b = age > 18; // > mayor que
// < menor que    
// === igual que
// !== distinto de
// >= mayor o igual
// <= menor o igual

console.log(age >= 18);
console.log(_typeof(b));