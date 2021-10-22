 let coffeeOrder=[
    "Alex-Cortado",
    "Ben-Cortado",
    "Charlie-Whatever's new"
]
console.log('coffeeOrder');
console.log(coffeeOrder.length);
console.log(coffeeOrder.push())
console.log(coffeeOrder.pop())

let songs=['jupiter','moonlight','emperor']
console.log(songs);
songs.push("schubert's pc", 'grieg wedding day')
console.log(songs)
songs.pop()
console.log(songs)
songs.shift();
console.log(songs)
songs.unshift()
console.log(songs)*/

//let favDrinks=['fanta','pepsi','whisky','coke'];
//console.log(favDrinks[0])
//for(let i=0;i<favDrinks.length;i++){console.log(favDrinks[i]);}

//Activity1//
let favFilms =['The Sound of Music',
'The Graduate',
'E.T.',
'Titanic',
'Star Wars']
console.log(favFilms);
favFilms.push('Dr. Zhivago',
'Jaws');
console.log(favFilms);
for (let i=0; i<favFilms.length; i++){
    console.log(favFilms[i]);
}
//Activity2//
let num=[Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50),Math.floor(Math.random()*50)];
console.log(num)
//Alternative from https://javascript.plainenglish.io/how-to-generate-an-array-of-random-numbers-in-javascript-f883de667e84
const randomArray = []
for(let i = 0; i<6; i++) {randomArray.push(Math.floor(Math.random()*50))}
console.log(randomArray)
//Activity3//
let age=9;
while(age>0){console.log(age);age--;
}
console.log(age);
//Activity4//
let favFilms =['The Sound of Music',
'The Graduate',
'E.T.',
'Titanic',
'Star Wars']
console.log(favFilms);
for (let i=0; i<favFilms.length; i++){
    console.log(favFilms[i]);}

if(favFilms[2]=="Ghostbusters")
{console.log("Yay it's Ghostbusters")}
else{console.log("Boo! we want Ghostbusters!")};
//Activity 5//
const randomArray1 = []
for(let i = 0; i<6; i++) {randomArray1.push(Math.floor(Math.random()*30))}
console.log(randomArray1)

for (let i=0; i<6; i++){
    if(randomArray1[i]%7==0){console.log(`${randomArray1[i]} is divisible by 7`)}
    else {console.log(`${randomArray1[i]} is not divisible by 7`)};
}
//Activity 6//
let bobsFollowers =['Anne','Brian','Simon','Philip']
let hannahsFollowers=['Anne','Bernie','Carol','Simon']
for (let i=0; i<4; i++ ){
  for  (let j=0;j<4; j++) {if
    (bobsFollowers[i]==hannahsFollowers[j]) 
    {console.log(`${bobsFollowers[i]} is a follower of both Bob and Hannah`)};


  }}
