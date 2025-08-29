import React, { useState } from 'react';
import axios from 'axios';

const UploadFace = () => {
  const [file, setFile] = useState();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await axios.post('/api/recognize', formData);
    if (res.data.matched) {
      const user = res.data.user;
      await axios.post('/api/mark-attendance', {
        user_id: user.id,
        location: "Office"
      });
      alert(`Attendance marked for ${user.name}`);
    } else {
      alert("Face not recognized.");
    }
  };

  return (
    <div>
      <h3>Upload Face Image</h3>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>Upload and Recognize</button>
    </div>
  );
};

export default UploadFace;
