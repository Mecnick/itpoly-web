import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      {/* แถบด้านบน */}
      <div className="top-banner">
        <h1>สาขาเทคโนโลยีสารสนเทศ</h1>
        <p>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่</p>
      </div>

      {/* แถบเมนูสำหรับการนำทาง */}
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/courses" className="nav-link">Courses</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>
      </nav>

      {/* ส่วนที่ใช้ React Router เพื่อเปลี่ยนหน้า */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
