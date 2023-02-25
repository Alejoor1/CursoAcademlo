const firstUser = {
    name: 'John',
    age: 29,
    email: "john@academlo.com",
    socia: [
        { name: 'facebook', url: 'facebook/john' },
        { name: 'twitter', url: 'twitter/john' }
    ] , 
};

// enviar un correo a un usuario
// 1. obtener correo


//function sendEmail(user) {
  //  const email = user.email;
  //  console.log("Enviamos un correo a" + email);

// }

function getEmail(user) {
    const email = user.email;
    console.log("Obtenemos el correo de" + email);
    return email;
}

// 2. enviar correo

function sendEmail(email) {
    console.log("Enviamos un correo a" + email);
}

const mail = getEmail(firstUser);
sendEmail(mail);

