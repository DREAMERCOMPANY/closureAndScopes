'use strict'
pi = 3.1416
console.log(pi)

function showPi(){
    'use strict'
    const PI = Number(Math.PI.toFixed(4))
    if(typeof PI === 'number'){
        console.log('PI is number type')
    }


    console.log({
        PI,
        typeofPi : typeof PI
    })
}

showPi()

const numbers = [1,2,3,4,5]
const newNum = [] //scope global
numbers.forEach(num => {
   
    if(num >=3){
        newNum.push(num)
        
    }
   
})

console.log(newNum)


console.log(reduceNum)

const list = [10,50,9,5,1,20]
const newList = list.sort((a,b)=> a - b)
console.log(newList)






