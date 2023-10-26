const alumnos =[
    {
        nombre:'Flavia',
        edad: 3
    } ,
    {
        nombre:'Sol',
        edad: 7
    },
    {
        nombre:'Carlos',
        edad: 5
    },
    {
        nombre:'Viginia',
        edad: 10
    },
    {
        nombre:'Zonia',
        edad: 4
    }
]

//quiero saber que alumnos tienen edad mayor o igual a 4
const mayoresDeEdad= alumnos.filter(alumno => alumno.edad >=4)

console.log(mayoresDeEdad)

//despues imprimir en pantalla puede ser una p o li (bucle)

for (let i=0; i < mayoresDeEdad.length; i++){
    document.write(`<li> Niño: ${mayoresDeEdad[i].nombre}, cuya edad es ${mayoresDeEdad[i].edad} </i>` )
}