from fastapi import APIRouter, UploadFile, File
from app.services.image_service import analyze_image

router = APIRouter()

@router.post("/" )
async def analyze_image_endpoint(file: UploadFile = File(...)):
    result = await analyze_image(file)
    return {"result": result}
