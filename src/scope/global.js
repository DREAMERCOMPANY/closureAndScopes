let a;
let b = 'Hello'
b = 'Sakurama'
a = 'Hi'

//Scope Global
let fruit = 'Pinneaple'
console.log(fruit)

function theBestFruit(){
    console.log(fruit)
}

theBestFruit()

function countries(){
    country = 'Colombia' 
    console.log(country)
}

countries()
console.log(country)

