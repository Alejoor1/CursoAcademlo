//  1. averiguar si el correo de un usuario pertenecen a academlo
const user = {
name: "Erik",
age: 25,
email: "Erik@academlo.com",
description: "Me gusta la programación"
};

const email = user.email;
console.log(email.endsWith("academlo.com"))

const user2 = {
    name: "Alejo",
    age: 26,
    email: "Alejo@gmail.com",
    description: "Estoy aprendiendo a programar"
    };
const email2 = user2.email;
console.log(email2.endsWith("academlo.com"));

//  2. sumar edades de los 2 usuarios

const sum = user.age + user2.age;
console.log(sum);

//  3. encuentra el tamaño de la primer palabra de la descripción de cada usuario

console.log(user.description.indexOf(" "));
console.log(user2.description.indexOf(" "));

