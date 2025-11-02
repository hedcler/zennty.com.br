import os
from urllib import request
from fastapi import APIRouter
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

public = Jinja2Templates(directory=os.getcwd() + "/src/site/public")
router = APIRouter()

@router.get("/", response_class=HTMLResponse)
def home():
    return public.TemplateResponse(
        request=request, name="index.html"
    )