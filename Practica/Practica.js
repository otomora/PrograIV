// ¿Qué se imprimirá en la consola//
let x = 5;
let y = x++;
console.log(y);
// 5 //

//¿Cuál es la salida del siguiente código?//
let x = 10;
(function() {
  console.log(x);
  let x = 20;
})();
//ReferenceError//

//¿Qué devuelve este código?//
console.log(typeof NaN);
//numbre//

//¿Cuál es la salida de este código?//
let a = {};
let b = a;
console.log(a === b);
//true//

//¿Cuál es la salida de este código?//
const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
// seria 2 //

//¿Qué imprime este código en la consola?//
console.log(typeof null);
// object//
 

//¿Cuál es el resultado de esta expresión?//
console.log(0 == '0');
//true//

//¿Qué retorna este código?//
console.log([] == false);
 //true//

 //¿Cuál es el resultado de la siguiente operación?
console.log(1 + '1' - 1);
// 10//

//¿Cuál es la salida del siguiente código?//
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
//[1,2,3,4]
//hola//