"use strict";

//  arreglo de objetos que dentro de el arreglo tiene otro arreglo que tiene otro objeto adentro
var users = [{
  name: 'Erik',
  age: 29,
  email: 'erik@academlo.com',
  social: [{
    name: 'facebook',
    url: 'facebook/erik'
  }, {
    name: 'twitter',
    url: 'twitter/erik'
  }],
  gender: 'Male'
}, {
  name: 'Georg',
  age: 33,
  email: 'georg@academlo.com',
  social: [{
    name: 'facebook',
    url: 'facebook/georg'
  }, {
    name: 'twitter',
    url: 'twitter/georg'
  }],
  gender: 'Male'
}, {
  name: 'Andrea',
  age: 42,
  email: 'andrea@hotmail.com',
  social: [{
    name: 'facebook',
    url: 'facebook/andrea'
  }, {
    name: 'twitter',
    url: 'twitter/andrea'
  }],
  gender: 'Female'
}, {
  name: 'Oscar',
  age: 31,
  email: 'oscar@academlo.com',
  social: [{
    name: 'facebook',
    url: 'facebook/oscar'
  }, {
    name: 'twitter',
    url: 'twiter/oscar'
  }],
  gender: 'Male'
}, {
  name: 'Daniela',
  age: 22,
  email: 'daniela@uaq.mx',
  social: [{
    name: 'facebook',
    url: 'facebook/andrea'
  }, {
    name: 'twitter',
    url: 'twitter/andrea'
  }],
  gender: 'Female'
}]; //  1. extraer todos los correos 

var emails = [];
console.log(emails);
emails.push(users[0].email);
emails.push(users[1].email);
emails.push(users[2].email);
emails.push(users[3].email);
emails.push(users[4].email);
console.log(emails); //  2. extraer todas las cuentas de facebook

var facebookAccounts = [];
facebookAccounts.push(users[0].social[0]);
facebookAccounts.push(users[1].social[0]);
facebookAccounts.push(users[2].social[0]);
facebookAccounts.push(users[3].social[0]);
facebookAccounts.push(users[4].social[0]);
console.log(facebookAccounts); //  Almacenar en un arreglo nuevo las url de facebook

var facebookUrls = [];
facebookUrls.push(users[0].social[0].url);
facebookUrls.push(users[1].social[0].url);
facebookUrls.push(users[2].social[0].url);
facebookUrls.push(users[3].social[0].url);
facebookUrls.push(users[4].social[0].url);
console.log(facebookUrls);