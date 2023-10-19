const num1 = 5;
const num2 = 10;
const num3 = 54;
const num4 = 98

function suma (a,b){
    return a + b;
}


const resultado1 = suma(num1, num2); //esto esta bien
const resultado2 = suma(15,30); // esto esta bien?
const resultado3= suma(); //esto esta bien?


console.log(resultado1, resultado2);


console.log(`el resultado 4 es: ${suma(1200,1500)}` );//esto esta bien?