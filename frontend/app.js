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