let price = 118500;

function updatePrice(){

    let change = (Math.random() * 1000) - 500;

    price += change;

    document.getElementById("btc").innerHTML =
        "$" + price.toFixed(2);

}

updatePrice();

setInterval(updatePrice,2000);