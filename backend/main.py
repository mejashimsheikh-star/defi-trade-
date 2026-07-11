from fastapi import FastAPI, WebSocket

from chat import websocket_endpoint
from wallet import get_balance, update_balance
from crypto import get_price


app = FastAPI()


@app.get("/")
def home():

    return {
        "message": "DeFi Trade API Running"
    }



@app.websocket("/chat")
async def chat(websocket: WebSocket):

    await websocket_endpoint(websocket)



@app.get("/balance")
def balance():

    return {
        "balance": get_balance()
    }



@app.post("/trade/{amount}/{result}")
def trade(amount: float, result: str):

    if result == "win":

        profit = amount * 0.8
        new_balance = update_balance(profit)

    else:

        new_balance = update_balance(-amount)


    return {
        "new_balance": new_balance
    }



@app.get("/price")
def price():

    return {
        "BTC": get_price()
    }