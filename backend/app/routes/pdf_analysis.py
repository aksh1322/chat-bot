from fastapi import APIRouter, UploadFile, File
from app.services.pdf_service import analyze_pdf

router = APIRouter()

@router.post("/")
async def analyze_pdf_endpoint(file: UploadFile = File(...)):
    result = await analyze_pdf(file)
    return {"result": result}
