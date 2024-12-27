import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../styles/ContactUs.css'; // ใส่การจัดการสไตล์ของหน้า ContactUs

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'โปรดใส่ชื่อของคุณ';
        if (!formData.email) newErrors.email = 'โปรดใส่ Email ของคุณ';
        if (!formData.message) newErrors.message = 'โปรดใส่ข้อมูลของคุณ';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // ทำการส่งข้อมูล (อาจจะเป็น API หรือการแสดงข้อความ success)
            alert('ส่งข้อความสำเร็จ!');
        } else {
            alert('โปรดกรอกข้อความให้ครบถ้วน.');
        }
    };

    const mapContainerStyle = {
        width: '100%',
        height: '250px',
    };

    const center = {
        lat: 18.8134579, // เปลี่ยนเป็นพิกัดของคุณ
        lng: 98.9921603, // เปลี่ยนเป็นพิกัดของคุณ
    };

    const onMarkerClick = () => {
        setSelectedPlace({
            name: "Your Location",
            address: "This is a placeholder address"
        });
    };

    return (
        <div className="contact-us">
            <div className="contact-info-wrapper">
                {/* ข้อมูลติดต่อ */}
                <div className="contact-info-card">
                    <h1>ติดต่อเรา</h1>
                    <p>Phone: 053 213 061</p>
                    <p>Email: lannapoly@lannapoly.ac.th</p>
                    <p>Facebook: www.facebook.com/lannapolyCNX</p>
                    <p>Address: 2 ถนน สุขเกษม ตำบลช้างเผือก เมือง เชียงใหม่ 50300</p>
                </div>

                {/* Google Map */}
                <div className="google-map">
                    <h2>เราอยู่ที่นี่:</h2>
                    <LoadScript googleMapsApiKey="AIzaSyCt4xi56bRYg6BrNL3Xcf4cyI7-A3-3h3M">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={12}
                        >
                            <Marker
                                position={center}
                                onClick={onMarkerClick}
                            />
                            {selectedPlace && (
                                <InfoWindow
                                    position={center}
                                    onCloseClick={() => setSelectedPlace(null)}
                                >
                                    <div>
                                        <h3>{selectedPlace.name}</h3>
                                        <p>{selectedPlace.address}</p>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>

            {/* ฟอร์มการติดต่อ */}
            <div className="contact-form-card">
                <h2>ส่งข้อความถึงเรา</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">ชื่อ</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">ข้อความ</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>

                    <button type="submit">ส่งข้อความ</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
