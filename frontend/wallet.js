async function loadBalance(){

    let response = await fetch("/balance");

    let data = await response.json();

    document.getElementById("balance").innerHTML =
    data.balance;

}


async function trade(result){

    let amount =
    document.getElementById("amount").value;


    let response = await fetch(
        `/trade/${amount}/${result}`,
        {
            method:"POST"
        }
    );


    let data = await response.json();


    document.getElementById("tradeResult").innerHTML =
    "New Balance: $" + data.new_balance;


    loadBalance();

}



loadBalance();