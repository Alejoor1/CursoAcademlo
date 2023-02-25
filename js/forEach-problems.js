

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'daniela@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];
// 1. Extraer todos los correos


const emails = [];

function storeEmail(user) {
    emails.push(user.email);
}

users.forEach(storeEmail);
console.log(emails);

// 2. Extraer todos los correos de los estudiantes de academlo y también los que no pertenecen a academlo

const emailsAcademlo = [];  
const emailsNotAcademlo = [];

function storeEmailAcademlo(user) {
    if (user.email.endsWith("academlo.com")) {
        emailsAcademlo.push(user.email);
    } else {
        emailsNotAcademlo.push(user.email);
    }
} 
users.forEach(storeEmailAcademlo);
console.log(emailsAcademlo);
console.log(emailsNotAcademlo);




