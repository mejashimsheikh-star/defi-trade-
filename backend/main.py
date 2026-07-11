from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "DeFi Trade API Running"
    } 
from chat import websocket_endpoint

@app.websocket("/chat")
async def chat(websocket: WebSocket):

    await websocket_endpoint(websocket)