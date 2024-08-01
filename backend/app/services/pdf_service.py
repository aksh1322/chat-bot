import PyPDF2

async def analyze_pdf(file) -> str:
    reader = PyPDF2.PdfFileReader(file.file)
    text = ""
    for page in range(reader.numPages):
        text += reader.getPage(page).extractText()
    # Your PDF analysis logic here
    return text
