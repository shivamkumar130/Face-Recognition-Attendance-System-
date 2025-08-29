import face_recognition
import numpy as np

def extract_face_encoding(image_bytes):
    img = face_recognition.load_image_file(image_bytes)
    encodings = face_recognition.face_encodings(img)
    return encodings[0] if encodings else None

def compare_faces(known, unknown, tolerance=0.6):
    return face_recognition.compare_faces([known], unknown, tolerance)[0]
