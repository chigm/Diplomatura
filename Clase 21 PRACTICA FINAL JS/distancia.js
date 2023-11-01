//Crear un código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:
//0 a 1000 metros = pie
//1000 a 10000 metros = bicicleta
//10000 a 30000 metros = colectivo
//30000 a 100000 metros = auto
//+100000 = avión

const distancia = parseInt (prompt('Ingrese su distancia para verificar en que transporte debe viajar:'))

if(Number.isNaN(distancia)){
    document.write ("La distancia debe ser un valor numerico")
}
else if (distancia < 0){
    document.write('Ingrese una distancia correspondiente')
}
else if(distancia >= 0 && distancia < 1000){
    alert("Usted debera ir a pie")
}
else if (distancia >=1000 && distancia < 10000){
alert("Le corresponde viajar en Bicicleta")
}
else if (distancia >10000 && distancia < 30000){
    alert("Le corresponde viajar en Colectivo")
}
else if(distancia > 3000 && distancia < 100000){
    alert("Le corresponde viajar en Auto")
}
else{
    alert("Le corresponde viajar Avion")
}





// OTRA MANERA DE RESOLVERLO


//function determinarMedioDeTransporte(distancia) {
//    if (distancia >= 0 && distancia <= 1000) {
//        return "A pie";
//    } else if (distancia > 1000 && distancia <= 10000) {
//        return "En bicicleta";
//    } else if (distancia > 10000 && distancia <= 30000) {
//        return "En colectivo";
//    } else if (distancia > 30000 && distancia <= 100000) {
//        return "En auto";
//    } else {
//        return "En avión";
//    }
//}

//const distancia = prompt("Ingrese la distancia en metros: "); 

//const medioDeTransporte = determinarMedioDeTransporte(parseFloat(distancia));

//document.write(`Para ${distancia} metros, el medio de transporte apropiado es: ${medioDeTransporte}`);