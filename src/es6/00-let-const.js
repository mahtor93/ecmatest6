
//Var es global
var lastName = 'Mario'; //Declarando y asignando una variable
lastName = 'notMario'; //Reasignando el valor de la variable
console.log(lastName); //Retorna notMario

//Let alcance de bloque
let fruit = 'Apple';
fruit ='Kiwi';
console.log(fruit); //Retorna Kiwi

//Const alcance de bloque
const animal = 'Dog';
animal = 'Cat';
console.log(animal); //Error, no se puede reasignar un valor CONST.

const fruits = () => {
    if(true){
        var fruit = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //Block scope. sólo se pueden acceder dentro del bloque donde son declaradas (dentro del if en este caso)
        const fruit3 = 'Banana'; //Block scope.
    }   
    console.log(fruit); //Retorna Apple
    console.log(fruit2); //Retorna Error
    console.log(fruit3);
}
fruits();

