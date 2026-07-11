let price = 118500;

function updatePrice(){

    let change = (Math.random() * 1000) - 500;

    price += change;

    document.getElementById("btc").innerHTML =
        "$" + price.toFixed(2);

}

updatePrice();

setInterval(updatePrice,2000);
function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username==="" || password===""){
        alert("Please enter username and password");
        return;
    }

    alert("Demo Login Successful");

    window.location.href="dashboard.html";
}
let btc = 118500;
let eth = 4200;
let sol = 160;

function updateMarket(){

    btc += (Math.random()*1000)-500;
    eth += (Math.random()*40)-20;
    sol += (Math.random()*4)-2;

    if(document.getElementById("btc"))
        document.getElementById("btc").innerHTML="$"+btc.toFixed(2);

    if(document.getElementById("eth"))
        document.getElementById("eth").innerHTML="$"+eth.toFixed(2);

    if(document.getElementById("sol"))
        document.getElementById("sol").innerHTML="$"+sol.toFixed(2);

}

updateMarket();

setInterval(updateMarket,2000); 

let countdown;

function startTrade(direction){

    let amount=document.getElementById("amount").value;

    if(amount==""){
        alert("Enter Amount");
        return;
    }

    let time=60;

    document.getElementById("result").innerHTML="Trade Running...";

    clearInterval(countdown);

    countdown=setInterval(function(){

        time--;

        document.getElementById("timer").innerHTML=time;

        if(time<=0){

            clearInterval(countdown);

            let win=Math.random()>0.5;

            if(win){

                document.getElementById("result").innerHTML="✅ WIN";

            }else{

                document.getElementById("result").innerHTML="❌ LOSE";

            }

        }

    },1000);

}