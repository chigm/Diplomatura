const datosUsuarios =[
    {
        nombre:'Flavia',
        password: 'as1234'
    } ,

    {
        nombre:'Laura',
        password: 'asf1234'
    },

    {
        nombre:'Sol',
        password: 'as123456'
    },

    {
        nombre:'Catalina',
        password: 'as87945212'
    },

    {
        nombre:'Victoria',
        password: 'asdefr'
    } ,


]

const soloPass = datosUsuarios.map(function(p){
    return p.password
})
console.log(soloPass)

//const soloPas = datosUsuarios.map (p => {
//    return p.password;
//  })
//  console.log(soloPas);

const soloNombre = datosUsuarios.map(function(p){
    return p.nombre
})

console.log(soloNombre)