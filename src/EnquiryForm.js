import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    courses: {
      engineering: false,
      medical: false,
      BALlbLLm: false,
      MBA: false,
      BBM: false,
      BcomMcom: false,
      BpharmaMpharma: false,
      BCAMCAMsc: false,
      other: false
    },
    aboutYourself: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        courses: {
          ...formData.courses,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your database storage logic here
    console.log(formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div style={{ width: '45%', boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Get in Touch</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <p>Courses looking for:</p>
            <label>
              <input type="checkbox" name="engineering" checked={formData.courses.engineering} onChange={handleChange} />
              Engineering
            </label>
            {/* Add other checkboxes similarly */}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="aboutYourself">Tell us a little bit about yourself:</label>
            <textarea id="aboutYourself" name="aboutYourself" placeholder="Tell us a little bit about yourself" value={formData.aboutYourself} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }}></textarea>
          </div>
          <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
      <div id='contactus' style={{ width: '45%', boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '10px' }}>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
          <p>5th Floor, Dhananjay Plaza, near Chellaram Diabetes Hospital,</p>
          <p>Bavdhan, Pune, Maharashtra 411021</p>
          <p>CONTACT:</p>
          <p>+91-8188808878</p>
          <p>+91-8103158082</p>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;
