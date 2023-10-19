mes = parseInt(prompt('Ingrese mes en numero', ''))

if(mes ==1 || mes == 2 || mes == 3){
    document.write('Corresponde al primer mes del año')
} else if (mes == 4 || mes == 5 || mes == 6){
    document.write('Correspnde al SEGUNDO trimestre del año')
}else if (mes == 7 || mes == 8 || mes == 9 ){
    document.write('Corresponde al 3 trimestre del año')
}else{
    document.write('Corresponde al 4 trimestre del año')
}