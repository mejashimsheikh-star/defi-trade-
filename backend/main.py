from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "DeFi Trade API Running"
    } 