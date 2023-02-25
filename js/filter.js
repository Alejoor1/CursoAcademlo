// el método filter () crea un nuevo array con
// todos los elementos que cumplan la condición dada
// la condición es la que decide si el elemento cumple con la condición


const numbers = [1, 2, 3, 4, 5, 6];

function condition (element) {
    console.log(element);
    return element > 2; 
}


const newArray = numbers.filter(condition);
console.log(newArray);

