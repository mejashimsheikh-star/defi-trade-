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