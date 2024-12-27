import React from 'react';
import '../styles/AboutUs.css'; // ใช้สำหรับสไตล์

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>เกี่ยวกับเรา</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Information Technology Department</h2>
          <p>เรามุ่งมั่นที่จะให้การศึกษาที่มีคุณภาพในด้านเทคโนโลยีสารสนเทศ แผนกของเราเปิดสอนหลักสูตรต่างๆ ที่มุ่งเน้นไปที่เทคโนโลยีล่าสุดและเตรียมนักศึกษาให้พร้อมสำหรับอาชีพด้านไอทีหลักสูตรของเราประกอบด้วยการเขียนโปรแกรม การพัฒนาเว็บไซต์ การรักษาความปลอดภัยเครือข่าย วิทยาศาสตร์ข้อมูล และอื่นๆ เรามุ่งเน้นทั้งทักษะทางทฤษฎีและการปฏิบัติเพื่อให้แน่ใจว่านักเรียนของเราพร้อมสำหรับโลกแห่งความเป็นจริง</p>
          <p>We are committed to providing quality education in the field of Information Technology. Our department offers various programs that focus on the latest technologies and prepare students for careers in IT. Our courses include programming, web development, network security, data science, and more. We focus on both theory and practical skills to ensure that our students are ready for the real world..</p>
        </div>
        <div className="about-image">
          <img src="/images/itex.png" alt="IT Department" />
        </div>
      </div>

      <div className="mission-card">
        <h3>เป้าหมายของเรา</h3>
        <p>เพื่อให้การศึกษาด้านเทคโนโลยีสารสนเทศที่มีคุณภาพสูง เข้าถึงได้ และมีนวัตกรรม ช่วยให้นักศึกษามีทักษะที่จำเป็นในการประสบความสำเร็จในโลกของเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว</p>
      </div>
    </div>
  );
};

export default AboutUs;
