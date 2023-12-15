function showFruits(){
    if(true){
        var fruitOne = 'Banana' //accesible fuera del bloque de codigo(No usar)
        let fruitTwo = 'Kiwi' //accesible solo dentro del bloque de codigo
        const fruitThree = 'Potatoe'//accesible solo dentro del bloque de codigo
        console.log(fruitTwo)
        console.log(fruitThree)
    }
    console.log(fruitOne)
    
}

showFruits()