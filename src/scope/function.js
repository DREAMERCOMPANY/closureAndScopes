function greeting(){
    let userName = 'Jhon' //Username solo es accesible dentro de esta funcion
    console.log(userName)

    if(userName === 'Jhon'){
        console.log(`!Welcome ${userName}!`)
    }
}

greeting()
console.log(userName)