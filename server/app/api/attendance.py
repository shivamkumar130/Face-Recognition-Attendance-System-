from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.db import models, database
from datetime import datetime

router = APIRouter()

class AttendanceRequest(BaseModel):
    user_id: int
    location: str

@router.post("/mark-attendance")
def mark_attendance(data: AttendanceRequest, db: Session = Depends(database.get_db)):
    record = models.Attendance(
        user_id=data.user_id,
        location=data.location,
        timestamp=datetime.now()
    )
    db.add(record)
    db.commit()
    return {"message": "Attendance recorded"}
