const empleados=  [ 
{
    nombre: 'Flavia',
    trabajo: 'desarrollador'
},
{
    nombre: 'laura',
    trabajo: 'abogada'
},
{
    nombre: 'Sol',
    trabajo: 'desarrollador'
},
{
    nombre: 'Luis',
    trabajo: 'maestro'
},
{
    nombre: 'Sofia',
    trabajo: 'desarrollador'
}
 ]

 //metodo array ¿? que solo muestre los desarrolladores ==


const busqueda = empleados.filter(nombre => nombre.trabajo === 'desarrollador')
console.log(busqueda)

for (let i=0; i < busqueda.length; i++){
    document.write(`<li> ${busqueda[i].nombre}, se dedica al sector de ${busqueda[i].trabajo} </i>` )
}

//LOS QUE NO SON DESARROLLADORES !==

const NObusqueda = empleados.filter(nombre => nombre.trabajo !== 'desarrollador')
console.log(NObusqueda)
for (let i=0; i <NObusqueda.length; i++){
    document.write(`<li> ${busqueda[i].nombre}, se dedican a ${NObusqueda[i].trabajo} </i>` )
}
