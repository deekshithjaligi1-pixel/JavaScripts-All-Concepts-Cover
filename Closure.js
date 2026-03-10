// closure = A function defined inside of another fuction ,
//           the inner function has access to the variables 
//           and scope of the outer function 
//            Allow for private variables and state maintainance 
//            Used frequencly in JS frameworks React , Vue , Angular 


function outer(){

    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}
message = "GoodBye";
outer();

//---------------------------------------------------------

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increaded to ${count}`);
    }
    function getCount(){
        return count;
    }
    return {increment,getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The Count Increased to ${counter.getCount}`);

//-------------------------------------------------
function createGame(){
    let score =0;
    function increasedScore(points){
    score+=points;
    console.log(`+${points}pts`);
}

function decreasedScore(points){
    score-=points;
    console.log(`-${points}pts`);
}
function getScore(){
    return score;
}
return {increasedScore,decreasedScore,getScore};
}

const game = createGame();

game.increasedScore(5);
game.increasedScore(6);
game.decreasedScore(3);

console.log(`The Score is ${game.getScore()}pts`);



