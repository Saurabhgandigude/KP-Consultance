import React from 'react'

export default function Middleimage() {
  return (
    <div>
      <img 
  style={{ 
    display: 'block', 
    margin: 'auto',
    width: '1400px',
    height: '600px'
  }}
  src="\councellingimage.webp"
 
/><div style={{ 
    position: 'absolute', 
    top: '30%', 
    left: '90px', // Adjust left position as needed
    transform: 'translateY(-50%)', 
    textAlign: 'left',
    color: 'white',
    zIndex: 1
  }}>
    <h1>TAKE YOUR FUTURE TO NEW HEIGHTS</h1>
    <h3>Explore Expert Education Consultants <br/>For Personalized Guidance</h3>
    <button style={{padding:'10px',top:'20px'}}type="button" class="btn btn-primary">Schedule your Free Consultation Now</button>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center',marginTop:'50px' }}>
  <div style={{ flex: '0 0 auto', width: '200px', textAlign: 'center', margin: '20px' }}>
    <h2 style={{ textDecoration: 'underline' }}>SUCCESSFUL ADMISSIONS</h2>
    <div style={{ color: 'lightblue', fontSize: '40px' }}>5000+</div>
  </div>

  <div style={{ flex: '0 0 auto', width: '200px', textAlign: 'center', margin: '20px' }}>
    <h2 style={{ textDecoration: 'underline' }}>YEARS OF EXPERIENCE</h2>
    <div style={{ color: 'lightblue', fontSize: '40px' }}>14+</div>
  </div>

  <div style={{ flex: '0 0 auto', width: '200px', textAlign: 'center', margin: '20px' }}>
    <p style={{ textDecoration: 'underline' }}>TOP COLLEGE PARTNERS</p>
    <div style={{ color: 'lightblue', fontSize: '40px' }}>200+</div>
  </div>

  <div style={{ flex: '0 0 auto', width: '200px', textAlign: 'center', margin: '20px' }}>
    <h2 style={{ textDecoration: 'underline' }}>SUCCESS RATE</h2>
    <div style={{ color: 'lightblue', fontSize: '40px' }}>99%</div>
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',marginTop:'-100px' }}>
  <div style={{ width: '50%', padding: '0 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h2 style={{ textAlign: 'center' }}>About Us</h2>
    <p style={{ textAlign: 'center' }}>Educom Guidance is a leading education consultancy, dedicated to personalized guidance with a rich 14-year legacy. Specializing in MBA admission, Engineering admission, and Medical admissions, we acknowledge the complexities of navigating the educational landscape. Our seasoned education consultants, with their wealth of experience, excel in simplifying intricate processes and guiding individuals toward success. We take pride in our extensive network, connected with 200+ top colleges and universities in India. With over 5000 success stories, Educom Guidance is a trusted partner illuminating the path to educational achievement in business, engineering, and medicine.</p>
  </div>
  <div style={{ width: '50%', textAlign: 'center' }}>
    <img src="\fourimage.jpg"  style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
  </div>
</div>




    </div>
  )
} 
