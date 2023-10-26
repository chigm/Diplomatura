//const numeros =  [ 1, 2, 22, 4, 78, 5, 300, 8 ];
//console.log(numeros); 
//console.log(numeros.sort()); 
//console.log(numeros.sort().reverse());  NO FUNCIONA ASI. 

const numeros = [1, 2, 22, 4, 78, 5, 300, 8 ];
numeros.sort(function(a,b){
    return a - b; 
});

console.log(numeros); // DE MENOR A MAYOR


//const numeros = [1, 2, 22, 4, 78, 5, 300, 8 ];
//numeros.sort(function(a,b){
//   return b - a; 
//});
//console.log(numeros);  ASI DE MAYOR A MENOR