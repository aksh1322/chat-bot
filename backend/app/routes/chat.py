from fastapi import APIRouter
from app.services.chat_service import process_chat

router = APIRouter()

@router.post("/")
def chat(message: str):
    response = process_chat(message)
    return {"response": response}
