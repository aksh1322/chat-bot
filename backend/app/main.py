from fastapi import FastAPI
from app.routes import chat, image_analysis, pdf_analysis

app = FastAPI()

app.include_router(chat.router, prefix="/chat", tags=["Chat"])
app.include_router(image_analysis.router, prefix="/image-analysis", tags=["Image Analysis"])
app.include_router(pdf_analysis.router, prefix="/pdf-analysis", tags=["PDF Analysis"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Chatbot API"}
