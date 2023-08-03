function newUser(name,age,country){
    var name = name || 'Mario'; //Se setean parametros por defecto
    var age = age || 29;
    var country = country || 'CH';
    console.log(name,age,country);
}
newUser(); //La funcion retorna parámetros por defecto
newUser('Hernán',666,'MX');

//Forma moderna
function newAdmin(name = 'Mario', age = 29, country='CL'){ //Se setean los argumentos por defecto de la función
    console.log(name,age,country);
}

newAdmin();
newAdmin('Ana',28,'PE');