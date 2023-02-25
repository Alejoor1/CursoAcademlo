// 1. averiguar si los correos dentro del arreglo pertencen a academlo
    // erik@academlo.com
    // daniel@gmail.com
    // si el texto termina con academlo.com pertenece a academlo

    const emails = ["erik@academlo.com", "daniel@gmail.com"];
    const firstEmail = emails[0];
    console.log(firstEmail.endsWith("academlo.com"));
    
    const secondEmail = emails[1];
    console.log(secondEmail.endsWith("academlo.com"));
    // console.log(emails.endsWith("academlo.com"));
    
    // 2. encuentra el tamaño de la primer palabra de un string

    const texts = ["Hoy es lunes", "Tengo que descansar"];
console.log(texts[0].indexOf(" "));
console.log(texts[1].indexOf(" "));