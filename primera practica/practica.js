/*
 ¿Qué se imprimirá en la consola//
let x = 5;
let y = x++;
console.log(y);
//La respuesta es 5 pero 5 es el vamor de Y y x quedaria como 6 pero como estamos imprimiendo el valor de y en ese caso seria 5//

¿Cuál es la salida del siguiente código?//
let x = 10;
(function() {
  console.log(x);
  let x = 20;
})();
//ReferenceError. Esto pasa porque en la funcion let x = 20 se eleva ,pero no se inicializa entonses queda en un punto muerto //

¿Qué devuelve este código?//
console.log(typeof NaN);
//numbre. Porque NaN significa number y es lo que estamos imprimiendo en la consola//

¿Cuál es la salida de este código?//
let a = {};
let b = a;
console.log(a === b);
//true   referencia al mismo objeto en memoria//

//¿Cuál es la salida de este código?//
const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
// seria 2 porque tomamos el valor de Y y el valor que le pretence es 2//

//¿Qué imprime este código en la consola?//
console.log(typeof null);
// object esto es un erro por lo que entiendo ya que null es untipo primitiva y typeof null devuelve object//
 

//¿Cuál es el resultado de esta expresión?//
console.log(0 == '0');
//true Lo que hace unpocas palabras es ver si 0 es igual a 0 //

//¿Qué retorna este código?//
console.log([] == false);
 //true lo que hace es convertir [] a 0 y cuando se compara con false tambien se convierte en 0 por lo tanto retorna a verdadero //

 //¿Cuál es el resultado de la siguiente operación?
console.log(1 + '1' - 1);
// Esto pasa porque 1+1 se convierte en 11 y despues se le resta 1 y como resultado es 10//

//¿Cuál es la salida del siguiente código?//
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
//[1,2,3,4] esto pasa porqu el let b=a; esta en el mismo array entonces si kodificamos b tambien estaremos modificando a 
*/