/*
HOISTING:

* Solo funciona con Var por que con let, const no accede a la variable 
* Las funciones si se elevan pero si no detecta las variables marca error o undefined

*/

//Ejemplo con variables
console.log(fruits)
let fruits = 'orange' 
console.log('fruits')

//Ejemplo con funciones
showFruit()

function showFruit(){
    console.log(`You liked ${fruit}`)
}

var fruit = 'Banana'