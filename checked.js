// checked id = The Property That Determines The checked Stateof HTML CheckBox or RadioButton 
let myCheckBox = document.getElementById("myCheckBox");
let VisaBtn = document.getElementById("VisaBtn");
let MasterCard = document.getElementById("MasterCard");
let PaypalBtn = document.getElementById("PaypalBtn");
let mySubmit = document.getElementById("mySubmit");
let subResult = document.getElementById("subResult");
let paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked) {
        subResult.textContent='You Are Subscribed';
    }else{
        subResult.textContent='You Are NOT Subscribed';
    }

    if(VisaBtn.checked){
        paymentResult.textContent='You are paying with Visa Card';
    }
    else if (MasterCard.checked){
        paymentResult.textContent='You are paying with MasterCard';
         
    }
     else  if (PaypalBtn.checked){
        paymentResult.textContent='You are paying with PayPalCard';
    }
    else {
         paymentResult.textContent='You Must Select a Payment type ';
    }
    }