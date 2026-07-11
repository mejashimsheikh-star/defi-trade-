let ws = new WebSocket("ws://127.0.0.1:8000/chat");


ws.onopen = function(){
    console.log("Chat connected");
};


ws.onmessage = function(event){

    let box = document.getElementById("messages");

    box.innerHTML += 
    "<p>" + event.data + "</p>";

};


function sendMessage(){

    let input = document.getElementById("chatInput");

    let message = input.value;


    if(message){

        ws.send(message);

        input.value = "";

    }

}