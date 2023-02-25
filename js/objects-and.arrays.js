// 1. Crear un arreglo de 5 usuarios que tengas las propiedades name y email
// 2. Validad si los usuarios tienen correo de Academlo

const users = [
{
    name: "Alejandro",
    email: "Alejandro@academlo.com"
},
{
    name: "Daniel",
    email: "Daniel@gmail.com"
},


{   name: "Carlos",
    email: "Carlos@gmail.com"
},


{   name: "Dani",
    email: "Dani@academlo.com"
},


{   name: "Maria",
    email: "Maria@gmail.com"
}
];

const email = users[0].email;
console.log(email.endsWith("academlo.com"));


// validar si todos los correos pertenecen a academlo
console.log(users[0].email.endsWith("academlo.com"))
console.log(users[1].email.endsWith("academlo.com"))
console.log(users[2].email.endsWith("academlo.com"))
console.log(users[3].email.endsWith("academlo.com"))
console.log(users[4].email.endsWith("academlo.com"))