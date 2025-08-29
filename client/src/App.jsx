import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterFace from './pages/RegisterFace';
import UploadFace from './pages/UploadFace';
import LiveAttendance from './pages/LiveAttendance';
import Signup from './pages/Signup';
import Signin from './pages/SignIn';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/signup">Signup</Link> |
        <Link to="/signin">Signin</Link> |
        <Link to="/register">Register</Link> |
        <Link to="/upload">Upload</Link> |
        <Link to="/live">Live</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Face Attendance System</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<RegisterFace />} />
        <Route path="/upload" element={<UploadFace />} />
        <Route path="/live" element={<LiveAttendance />} />
      </Routes>
    </Router>
  );
}

export default App;