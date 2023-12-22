/* function saveMoney(coins){
    let moneySaved = 0
    moneySaved += coins
    console.log(`Your money saved: $${moneySaved}`) 
}

saveMoney(5)
saveMoney(5) */

function saveMoney(){
    let current = 0;

    function countMoney(name , coins){
        current += coins
        console.log(`${name} , You have saved : $${current}`)

    }
    return countMoney;
}

const jhonMoney = saveMoney()
jhonMoney('Jhon', 10)
jhonMoney('Jhon', 30)
jhonMoney('Jhon', 50)


//Added elements to a shopping cart

function shoppingCart(){
    let cart = []

    function addItems(item){
        cart.push(item)
        console.log(cart)
    }

    return addItems;
}


//Create Instance of shoppingCart function
const techMerch = shoppingCart()
techMerch('Earbuds')
techMerch('Mouse')
techMerch('Keyboard')

