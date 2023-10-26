const nombre = 'Virginia';
const edad = 27;

console.log(`Hola ${nombre}. Vos tenes ${edad}`)
// interpolacion strings

const edad1 = 18;
const edad2 = 32;

const mensaje1 = `La cuota para persona de ${edad1} es de ${edad1 >=21? 5000:3500}`
//operador ternario > version simplificada del if. concione ? true : false
console.log(mensaje1)

const mensaje2 = `La cuota para personas de ${edad2} es de ${edad2 >= 21 ? 5000 : 3000}`
console.log(mensaje2)