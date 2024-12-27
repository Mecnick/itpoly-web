import React, { useState } from 'react';
import '../styles/Courses.css'; // ใส่การจัดการสไตล์ของหน้าคอร์ส

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (fileName) => {
    setModalContent(fileName); // กำหนดไฟล์ที่คลิก
    setIsModalOpen(true); // เปิด Modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // ปิด Modal
  };

  const closeModalOnOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div className="courses">
      <h1>คอสของเรา</h1>
      
      <div className="card-container">
        <div className="card">
          <h2>สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์ 1</h2>
          <p>ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศกลุ่มอาชีพซอฟต์แวร์และการประยุกต์.</p>
          <button className="card-link" onClick={() => openModal('/files/PD1.pdf')}>View PDF</button>
        </div>

        <div className="card">
          <h2>สาขาวิชาเทคโนโลยีสารสนเทศ 2</h2>
          <p>ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศกลุ่มอาชีพซอฟต์แวร์และการประยุกต์.</p>
          <button className="card-link" onClick={() => openModal('/files/PD2.pdf')}>View PDF</button>
        </div>

        <div className="card">
          <h2>สาขาวิชาเทคโนโลยีสารสนเทศ 1</h2>
          <p>ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศกลุ่มอาชีพซอฟต์แวร์และการประยุกต์.</p>
          <button className="card-link" onClick={() => openModal('/files/PD3.pdf')}>View PDF</button>
        </div>

        <div className="card">
          <h2>สาขาวิชาเทคโนโลยีสารสนเทศ 2</h2>
          <p>ประเภทวิชาอุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศกลุ่มอาชีพซอฟต์แวร์และการประยุกต์.</p>
          <button className="card-link" onClick={() => openModal('/files/PD4.pdf')}>View PDF</button>
        </div>
      </div>

      {/* Modal for PDF View */}
      {isModalOpen && (
        <div className="modal" onClick={closeModalOnOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>PDF Preview</h2>
            <iframe src={modalContent} width="100%" height="400px" title="PDF Preview"></iframe>
            <a href={modalContent} target="_blank" rel="noopener noreferrer">
              <button className="download-btn">Download PDF</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
