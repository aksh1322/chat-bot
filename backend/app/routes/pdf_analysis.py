import PyPDF2
from fastapi import APIRouter, UploadFile, File
from app.services.pdf_service import analyze_pdf

router = APIRouter()

@router.post("/")
async def analyze_pdf(file: UploadFile):
    reader = PyPDF2.PdfReader(file.file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text