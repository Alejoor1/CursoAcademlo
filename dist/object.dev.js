"use strict";

var car = {
  color: "Azul",
  doors: 5,
  price: 25000
};
console.log(car); // eliminar una propiedad / valor

delete car.color;
console.log(car); // agregar una propiedad / valor

car.brand = "Ford";
car.model = "Mustang";
console.log(car); // cambiar una propiedad

car.color = "verde";
console.log(car);