//Activity1//
let age = 18;
let country = 'UK'
if (age>17&&country=='UK')
    {console.log('Yes I can serve you.')
}
    else {console.log("You aren't old enough.")}
//Activity2//
    let topping = 'olives';
    switch(topping){
     case'mushroom': console.log('These are important ingredients for my pizza.');
     break;
     case'pepperoni':console.log(`I don't mind having ${topping} on my pizza.`);
     break;
     default: console.log( `${topping} should not be on a pizza`);
        
}
//Activity3//
let password='seeeeeecret'
if (password.length<8) {console.log('Too short!')}
else {console.log (`${password}`)};

//Activity3 stretch//
/* let num=3;
switch(num){
case num % 3==0:
case num%5==0:
console.log('This number is divisible by 3 or 5')
break;
default:console.log('Not divisible by 3 or 5'); */
//Above does not work//

//Trying again with if statement*/
let num=15;
if (num%3==0
||num%5==0){
console.log('This number is divisible by 3 or 5')}
else {console.log('Not divisible by 3 or 5')};
//Activity4
let numb=6
if(numb%3==0 && numb%5==0){console.log('fizz buzz')}
else if(numb%3==0){console.log('fizz')}
else if(numb%5==0){console.log('buzz')}
else{console.log(numb)}
//Activity5//Copied from forum
let palindrome = 7007;
let palinString = palindrome.toString();
console.log(palinString);

let palinSplit = palinString.split('');
console.log(palinSplit);

let palinReverse = palinSplit.reverse();
console.log(palinReverse)

let palinJoin = palinReverse.join('');
console.log(palinJoin);

if (palindrome == palinJoin) {
    console.log("This is a palindrome.")
} else {
   console.log("Not a palindrome") 
}
//Activity6//
let time=7;
let placeOfWork=9;
let townOfHome=7;
let commute=8;
if (time=townOfHome){console.log("I'm at home")}
else if(time=commute){console.log("I'm commuting")}
else if (time=placeOfWork){console.log("I'm at home")}
else {console.log("I'm probably still at work.")}
//Activity9//
let num1 =5
let num2=6
if ((num1+num2)%2){console.log(num1+num2)}
else{console.log(num1*num2)}
//Activity8//
let word='sale'
let wordSplit=word.split('')
console.log(wordSplit)
if (wordSplit[0]==wordSplit[(wordSplit.length-1)])
{console.log('true')}
else{console.log('false')}
//Activity7//
let string1= "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshI"
let string1Split=string1.split('')//turns string into array
let lastA=string1.lastIndexOf('a')//finds last index of 'a'
let lastE=string1.lastIndexOf('e')
let lastI=string1.lastIndexOf('i')
let lastO=string1.lastIndexOf('o')
let lastU=string1.lastIndexOf('u')
let lastVowelArray=[lastA,lastE,lastI,lastO,lastU]//combines the above into a new array 
console.log(Math.max.apply(null,lastVowelArray))//finds highest value in an array

    
