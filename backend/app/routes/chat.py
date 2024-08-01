from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Message(BaseModel):
    message: str

@router.post("/")
async def send_message(message: Message):
    # Process the message here
    return {"response": f"Received: {message.message}"}
