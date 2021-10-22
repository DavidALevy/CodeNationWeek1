let age=55
if (age<18){console.log(`The price is £8`)}
else if (18<=age<60){console.log(`The price is £10.95`)}
else {console.log(`The price is £7.50`)}

const favColor=(Color) =>{
    console.log(`My favourite colour is ${Color}`);
}
favColor("Blue") 

const factorial=(n)=>{
    if ((n===0)||(n===1)){
        return 1;
    }else{
        return(n*factorial(n-1))
    }
}
console.log(factorial(33));

let orderCount=0
const takeOrder = (topping, topping1) => {
    console.log(`Pizza with ${topping} and ${topping1}`);
    orderCount++
}
takeOrder("pineapple","cherry");
takeOrder('banana', 'apple')
takeOrder('extra cheese','tomato')
console.log(orderCount)

const balance1=1000
const PIN1=1234
let PIN=PIN1
let balance=balance1
const cashMachine =(PIN, amount)=>{
    if(PIN==PIN1&&amount<=balance){
        console.log("Here is your cash!")
    }
    else if (PIN!==PIN1){
        console.log('Your PIN is incorrect')
    }
    else{
        console.log('You do not have sufficient funds')
    }
}
cashMachine(1234,5600)

//Activity1//
const person={name:'Dave',
age:27,
male:true,
songs:['Mozart','Grieg','Chopin'],
sayHi(){
    return `Hello my name is ${this.name}`
}
}
console.log(person.name)
console.log(person.songs[1])
console.log(person.sayHi())



//Activity2//
const pet={
name:'Snowy',
typeOfPet:'Guinea pig',
age:1,
colour:'white',
eatAndDrink(){return `${this.name} is eating`}
}

console.log(pet.eatAndDrink())

//Activity3//
const coffeeShop={
branch:'Salford',
drinks:[
['Tea',1.20],
['Coffee',1.50]
['Choc',2.50]
],
food:[['pizza',3.00],
['chips',1.50],
['burger',4.00]
],
drinksOrdered(){return`Your drinks order is: ${this.drinks[0][0]} costing £${this.drinks[0][1]}.`}  
,
foodOrdered(){return`Your food order is: ${this.food[1][0]} costing £${this.food[1][1]}.`
},
totalOrder(){return`The total cost of your order is: £${(this.drinks[0][1]+this.food[1][1]).toFixed(2)}.`}}
console.log(coffeeShop.drinksOrdered()+ coffeeShop.foodOrdered()+coffeeShop.totalOrder())
