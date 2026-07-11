async function getBTCPrice(){

    let response = await fetch("/price");

    let data = await response.json();

    document.getElementById("btcPrice").innerHTML = data.BTC;

}


getBTCPrice();


setInterval(getBTCPrice,5000);