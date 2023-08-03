//Funcion normal
function square(num){
    return num *num;
}

//Arrow Function. Es recomendado usar variables declaradas como const.
const square = (num) => {
    return num*num;
}

//sirve sólo para funciones simples, de un parámetro con return implícito.
const square = num => num*num