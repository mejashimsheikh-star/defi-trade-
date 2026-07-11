let timer = 60;
let choice = "";
let interval;


function startTrade(direction){

    choice = direction;

    timer = 60;

    document.getElementById("result").innerHTML =
    "Trade Started: " + direction;


    interval = setInterval(()=>{

        timer--;

        document.getElementById("timer").innerHTML = timer;


        if(timer <= 0){

            clearInterval(interval);

            finishTrade();

        }


    },1000);

}



function finishTrade(){

    let result =
    Math.random() > 0.5 ? "UP" : "DOWN";


    if(choice == result){

        document.getElementById("result").innerHTML =
        "✅ WIN! Market moved " + result;

    }
    else{

        document.getElementById("result").innerHTML =
        "❌ LOSS! Market moved " + result;

    }

}