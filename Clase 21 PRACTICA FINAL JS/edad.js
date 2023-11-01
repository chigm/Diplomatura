//pide la edad y si es mayor de 18 años indic si puede conducir

const edad = parseInt(prompt('Ingrese su edad,'))

if(Number.isNaN(edad)){
    document.write('La edad ingresada debe ser un numero')
}else if (edad >= 18) {
    document.write('Usted tiene permitido conducir')
} else{
    document.write('Usted es menor de edad y no tiene permitido conducir')
}