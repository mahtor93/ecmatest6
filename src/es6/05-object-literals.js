//enhace object literals

//metodo tradicional
function nuevoUsuario(user,age,country){
    return{
        user:user,
        age:age,
        country:country
    }
}


//Método moderno
function nuevoUsuario(user,age,country,uId){
    return{
        user,
        age,
        country,
        id:uId
        //uId se asigna como id
    }
}

console.log(nuevoUsuario('test',33,'MX',1))