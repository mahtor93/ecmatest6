//arrays destrucuring
let frutas = ['Manzana', 'Platano'];
let [a,b] = frutas; //desestructurando el array para su uso más práctico.
console.log(a,b);
console.log(a);
console.log(b);

//desestructuración de objetos
let user =  { username: ' Test', age:33};
let {username,age}= user;
console.log(username);
console.log(age);
console.log(user.age);

//spread operator
let person = { name: 'Test2', age: 66}
let country = 'MX';
let data = { ...person, country } //agregando valores de un objeto a otro.
console.log(person);
console.log(data);

//rest