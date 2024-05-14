import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
export default function Largebox2() {
  return (
    <div><div className="container1">
    <div className="header1">
      <h2>What We Offer</h2>
      <div className="underline"></div>
    </div>
    <div className="content">
      <div className="row">
        {/* First Card */}
        <div className="col-md-6">
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src="\card1.jpeg" className="card-img-top" style={{ width: '80px', objectPosition: 'center top', alignSelf: 'center' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}/>
            <div className="card-body">
              <p className="card-text">​CAREER COUNSELING<br />
                Explore meaningful career paths with our career counseling services. Our consultants provide assessments, guidance on career trajectories, and support in developing the skills necessary for success in today's competitive job market..
              </p>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="col-md-6">
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src="\card2.jpeg" className="card-img-top" style={{ width: '80px', objectPosition: 'center top', alignSelf: 'center' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}/>
            <div className="card-body">
              <p className="card-text">PERSONALIZED CONSULTATION<br />
                Recognizing that each educational journey is unique, we take a personalized approach to our consultation services. Whether you're aiming for an MBA, engineering degree, or medical school, our consultants tailor their guidance to meet your specific needs and aspirations.
              </p>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div className="col-md-6">
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src="\card3.jpeg" className="card-img-top" style={{ width: '80px', objectPosition: 'center top', alignSelf: 'center' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}/>
            <div className="card-body">
              <p className="card-text">ADMISSION SUPPORT<br />
                Gain a competitive edge with our dedicated admission support services. Whether you're pursuing an MBA, engineering degree, or medical education, our consultants assist with application preparation, personal statement refinement, and interview coaching.
              </p>
            </div>
          </div>
        </div>
        {/* Fourth Card */}
        <div className="col-md-6">
          <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src="\card4.jpeg" className="card-img-top" style={{ width: '80px', objectPosition: 'center top', alignSelf: 'center' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}/>
            <div className="card-body">
              <p className="card-text">POST-ADMISSION ASSISTANCE<br />
                Receive guidance on settling into your chosen program and navigating the initial stages of your academic journey.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div></div>
  )
}
