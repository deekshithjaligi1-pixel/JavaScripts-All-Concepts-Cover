// callback = a function thatv is passed as an argument 
//              to another function
//              
//              used to handle asyncronous opeartions:
//               1. Reading a file
//               2. Netwoek responce 
//               3 . Interaction with databases
//               
//               "Hey , when you're done, call this next"



hello(bye);
wait(Hi);

function hello(){
    console.log("Hello!");
}

function bye(){
    console.log("Bye!");
}

function wait(){
    console.log("Wait!"); 
}

function Hi(){
        console.log("Hi!"); 
}
//---------------------------------------------------

sum(displayPage,1,2);

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}


function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myId").textContent = result;

}

