// Array of Objects 

const fruits = [{name:"apple",color:"red",season :"winter"},
                {name:"mango",color:"yellow",season :"summer"},
                {name:"watermaelon",color:"green",season :"spring"}]


console.log(fruits[0].name);
console.log(fruits[1].color); 
console.log(fruits[2].season); 

//---------------------------------------------

fruits.push({name:"orange",color:"orange",season:"rainy"});
fruits.pop({name:"watermaelon",color:"green",season:"spring"});
fruits.splice(1,2)
console.log(fruits);
//----------------------------forEach-----------------
fruits.forEach(fruits => console.log(fruits.name));

//----------------------  Map() -------------------------

const fruitsNames = fruits.map(fruit => fruit.name);
const fruitsColors = fruits.map(fruit => fruit.color);
const fruitsSeasons = fruits.map(fruit => fruit.season);

//----------------------- filter() -------------------------

const orangefruits = fruits.filter(fruit => fruit.color ==="orange");
const applefruits= fruits.filter(fruit => fruit.season ==="winter");
const watermelonfruits = fruits.filter(fruit => fruit.name ==="watermaelon");

console.log(watermelonfruits);

//---------------------reduce()-------------------------

const maxFruits = fruits.reduce((max,fruit) => fruit.length > max.length ? fruit:max);
const minFruits = fruits.reduce((min,fruit) => fruit.length < min.length ? fruit:min);

console.log(maxFruits);
console.log(minFruits);