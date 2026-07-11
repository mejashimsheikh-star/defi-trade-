from fastapi import WebSocket, WebSocketDisconnect
from chat_database import save_message


class ConnectionManager:

    def __init__(self):
        self.active_connections = []


    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)


    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)


    async def broadcast(self, message: str):

        for connection in self.active_connections:
            await connection.send_text(message)



manager = ConnectionManager()



async def websocket_endpoint(websocket: WebSocket):

    await manager.connect(websocket)

    try:

        while True:

            data = await websocket.receive_text()

            # Save message in database
            save_message("User", data)

            # Send message to all connected users
            await manager.broadcast(data)


    except WebSocketDisconnect:

        manager.disconnect(websocket)