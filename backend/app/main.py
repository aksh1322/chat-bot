from fastapi import FastAPI
from app.routes import chat, image_analysis, pdf_analysis
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to restrict allowed origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router)
app.include_router(chat.router, prefix="/api/chat", tags=["Chat"])
app.include_router(image_analysis.router, prefix="/api/image-analysis", tags=["Image Analysis"])
app.include_router(pdf_analysis.router, prefix="/api/pdf-analysis", tags=["PDF Analysis"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Chatbot API"}
