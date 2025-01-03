import React from 'react';
import '../styles/Home.css'; // เพิ่มการเรียกใช้ไฟล์ CSS

const Home = () => {
  return (
    <div className="home">
      {/* ส่วนเนื้อหาของหน้า Home */}
      <div className="header-section">
        <img src="/images/itlogo.png" alt="IT Department" className="header-image" />
        <h1>Welcome To The Information Technology Department</h1>
        <p>ยินดีต้อนรับเข้าสู่สาขาเทคโนโลยีสารสนเทศ</p>
      </div>

      {/* ส่วนการ์ด 3 ใบ (Learn Programming, Web Development, Graphic Design) */}
      <div className="card-container">
        <div className="home-card">
          <h2>Learn Programming</h2>
          <p>เรียนรู้การเขียนโปรแกรม.</p>
        </div>
        <div className="home-card">
          <h2>Web Development</h2>
          <p>ผู้พัฒนาเว็ปไซต์.</p>
        </div>
        <div className="home-card">
          <h2>Graphic Design</h2>
          <p>ออกแบบ Graphic/ผลิตภัณฑ์</p>
        </div>
      </div>

      {/* ส่วนสำหรับรูปภาพแกลเลอรี */}
      <div className="image-gallery">
        <img src="/images/HE1.png" alt="Gallery 1" className="gallery-image" />
        <img src="/images/HE2.png" alt="Gallery 2" className="gallery-image" />
        <img src="/images/HE3.png" alt="Gallery 3" className="gallery-image" />
        <img src="/images/HE4.png" alt="Gallery 1" className="gallery-image" />
        <img src="/images/HE5.png" alt="Gallery 2" className="gallery-image" />
      </div>
    </div>
  );
};

export default Home;
