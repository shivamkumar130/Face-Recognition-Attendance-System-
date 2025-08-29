from fastapi import APIRouter, UploadFile, Depends
from sqlalchemy.orm import Session
from app.core import face_utils
from app.db import models, database
import numpy as np
import json

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/recognize")
async def recognize(file: UploadFile, db: Session = Depends(get_db)):
    image_bytes = await file.read()
    query_encoding = face_utils.extract_face_encoding(image_bytes)
    if query_encoding is None:
        return {"matched": False, "message": "No face found."}

    users = db.query(models.User).all()
    for user in users:
        known_encoding = np.array(json.loads(user.face_encoding))
        match = face_utils.compare_faces(known_encoding, query_encoding)
        if match:
            return {
                "matched": True,
                "user": {
                    "id": user.id,
                    "name": user.name,
                    "employee_id": user.employee_id
                }
            }

    return {"matched": False, "message": "Face not recognized."}
