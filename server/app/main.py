from fastapi import FastAPI
from app.api import recognize, attendance, register

app = FastAPI()

app.include_router(recognize.router, prefix="/api")
app.include_router(attendance.router, prefix="/api")
app.include_router(register.router, prefix="/api")

