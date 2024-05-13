import React from 'react';
import './largebox.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

export default function Largebox() {
  return (
    <div>
      <div className="container1">
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
            {/* Fifth Card */}
            <div className="col-md-12">
              <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <img src="\card5.jpeg" className="card-img-top" style={{ width: '80px', objectPosition: 'center top', alignSelf: 'center' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}/>
                <div className="card-body">
                  <p className="card-text">CONTINUOUS SUPPORT<br />
                    Our commitment doesn't end with admission – we provide ongoing support throughout your academic and professional journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
                What People are Saying About Us
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              Your go-to destination for comprehensive information on colleges, universities, courses, and educational programs in India, helping students make well-informed decisions about their academic journey.
            </div>
          </div>
        </div>
    </div>
  
    <div className="container px-4 text-center">
      <div className="row gx-5">
        {/* First Column */}
        <div className="col">
          <img src=""  className="img-fluid" style={{ width: '100px', margin: 'auto' }} />
          <div className="p-3">
            <p>The admission support and MBA consultation I received from Educom Guidance, known as one of the best education consultants, were exceptional. The consultants went above and beyond, assisting with my MBA application, refining my application materials, and providing invaluable insights.</p>
            <p><strong>Deepak Mane | Student</strong></p>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="col">
          <img src="" className="img-fluid" style={{ width: '100px', margin: 'auto' }} />
          <div className="p-3">
            <p>I successfully secured admission to my dream Engineering College with the exceptional support of Educom Guidance, a renowned education consultant. Thank you for helping me turn my aspirations into reality!</p>
            <p><strong>Pradeep Deshmukh | Student</strong></p>
          </div>
        </div>
        
        {/* Third Column */}
        <div className="col">
          <img src="" className="img-fluid" style={{ width: '100px', margin: 'auto' }} />
          <div className="p-3">
            <p>The journey to medical school is undoubtedly challenging, but the guidance from these MBBS consultants turned challenges into opportunities. Their strategic approach, from application crafting to interview preparation, played a pivotal role in my successful MBBS admission. Highly recommend their services.</p>
            <p><strong>Prathmesh | Student</strong></p>
          </div>
        </div>
      </div>
    </div>
  


    </div>
    
  );
}
