import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function Footer() {
  const handleMapClick = () => {
    // Add logic to open Google Maps with the provided location
    window.open("https://www.google.com/maps?q=Your+Location", "_blank");
  };

  return (
    <footer style={{ backgroundColor: 'grey', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <p>Your Address Here</p>
        </div>
        <div style={{ flex: '1', textAlign: 'right' }}>
          <div style={{ cursor: 'pointer' }} onClick={handleMapClick}>
            {/* You can replace the src with your actual iframe src */}
            <iframe title="Map Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.602762064884!2dYour+Longitude!3dYour+Latitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ4JzUwLjkiTiA1MMKwMzEnMjguOSJF!5e0!3m2!1sen!2sin!4v1635245803586!5m2!1sen!2sin" width="200" height="150" style={{ border: 0, borderRadius: '5px' }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
