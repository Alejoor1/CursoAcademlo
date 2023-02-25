// crea un arre de 5 personas que contenta el facebook y el twitter y luego separa a los hombre de las mujeres

const personas = [ 
    {nombre: "Erik", facebook: "erik", twitter: "erik", sexo: "M"},
    {nombre: "Daniel", facebook: "daniel", twitter: "daniel", sexo: "M"},
    {nombre: "Andrea", facebook: "andrea", twitter: "andrea", sexo: "F"},
    {nombre: "Alejandro", facebook: "alejandro", twitter: "alejandro", sexo: "M"},
    {nombre: "Luis", facebook: "luis", twitter: "luis", sexo: "M"},
    ]

    const hombres = personas.filter((persona) => persona.sexo === "M");
    console.log(hombres);
    
    const mujeres = personas.filter((persona) => persona.sexo === "F");
    console.log(mujeres);

    
    
