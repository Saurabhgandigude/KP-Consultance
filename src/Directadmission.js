import React, { useState } from 'react';
import Footer from './Footer';
function DirectAdmission() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    phoneNumber: '',
    fatherMobileNumber: '',
    email: '',
    collegePreferenceLocation: '',
    preferredCollege: '',
    tenthScore: '',
    twelfthScore: '',
    yearOfPassing10th: '',
    yearOfPassing12th: '',
    selectOption: 'pcb'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit data to the database
    console.log(formData);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '10px' }}>
        <h2>Free Admission Consultation</h2>
        <p style={{ marginBottom: '20px' }}>
          Educom Guidance Pvt. Ltd. is a company dedicated to education consultants for personalized guidance. We specialize in providing expert guidance with a rich legacy of 14 years of experience. Our focus areas include MBA consultation, engineering consultation, and medical admission consultation. We understand that navigating the educational landscape can be complex, and that's where our experienced education consultants come in to simplify the process and guide you towards success.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="fatherName">Father's Name:</label>
            <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="fatherMobileNumber">Father's Mobile Number:</label>
            <input type="text" id="fatherMobileNumber" name="fatherMobileNumber" value={formData.fatherMobileNumber} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="collegePreferenceLocation">College Preference Location:</label>
            <input type="text" id="collegePreferenceLocation" name="collegePreferenceLocation" value={formData.collegePreferenceLocation} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="preferredCollege">Preferred College:</label>
            <input type="text" id="preferredCollege" name="preferredCollege" value={formData.preferredCollege} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="tenthScore">10th Score:</label>
            <input type="text" id="tenthScore" name="tenthScore" value={formData.tenthScore} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="twelfthScore">12th Score:</label>
            <input type="text" id="twelfthScore" name="twelfthScore" value={formData.twelfthScore} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="yearOfPassing10th">Year of Passing 10th:</label>
            <input type="text" id="yearOfPassing10th" name="yearOfPassing10th" value={formData.yearOfPassing10th} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="yearOfPassing12th">Year of Passing 12th:</label>
            <input type="text" id="yearOfPassing12th" name="yearOfPassing12th" value={formData.yearOfPassing12th} onChange={handleChange} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="selectOption">Select Option:</label>
            <select id="selectOption" name="selectOption" value={formData.selectOption} onChange={handleChange}>
              <option value="pcb">PCB</option>
              <option value="pcm">PCM</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
        <Footer/>
    </div>
  );
}

export default DirectAdmission;
