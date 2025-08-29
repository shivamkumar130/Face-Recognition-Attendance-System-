import React, { useState } from "react";

const LiveAttendance = () => {
  const [message, setMessage] = useState("");

  const markAttendance = async () => {
    // Example data, replace with real user/location/camera data
    const data = {
      user_id: 1,
      location: "Lab 1"
    };

    const response = await fetch("http://localhost:8000/api/mark-attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div>
      <h2>Live Attendance</h2>
      <p>Display live camera feed and mark attendance here.</p>
      <button onClick={markAttendance}>Mark Attendance</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LiveAttendance;