import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Location.css'

function Location() {
  return(
    <>
      <Header/>
      <div className="location-page">
          <div className="map-container">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.9254767274424!2d-92.37962062376316!3d31.333431156353157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86254eab8ed61331%3A0xe04b3481c1bc3c29!2sYucatan%20Restaurant!5e0!3m2!1sen!2sus!4v1723407578330!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="mobile-location">
              <h1 className="mobile-title">Pineville, LA</h1>
              <h2 className="mobile-address">200 Sandifer Ln, Pineville, LA, 71360</h2>
              <h3 className="mobile-hours-title">Buisnes Hours:</h3>
              <p className="mobile-buisness-hours">
                  Monday: 11:00 AM - 9:00 PM<br />
                  Tuesday: 11:00 AM - 9:00 PM<br />
                  Wednesday: 11:00 AM - 9:00 PM<br />
                  Thursday: 11:00 AM - 9:00 PM<br />
                  Friday: 11:00 AM - 10:00 PM<br />
                  Saturday: 11:00 AM - 9:00 PM<br />
                  Sunday: 11:00 AM - 9:00 PM<br />
              </p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Yucatan+Mexican+Restaurant+123+Main+Street+City+State+ZIP"
                  target="_blank" className="mobile-directions-link">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                      <path
                          d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                  </svg>
                  GET DIRECTIONS
              </a>
          </div>

          <div className="info-box">
              <h2>Pineville, LA</h2>
              <p>200 Sandifer Ln, Pineville, LA, 71360</p>
              <h3 className="hours-title">Buisnes Hours</h3>
              Monday: 11:00 AM - 9:00 PM<br />
              Tuesday: 11:00 AM - 9:00 PM<br />
              Wednesday: 11:00 AM - 9:00 PM<br />
              Thursday: 11:00 AM - 9:00 PM<br />
              Friday: 11:00 AM - 10:00 PM<br />
              Saturday: 11:00 AM - 9:00 PM<br />
              Sunday: 11:00 AM - 9:00 PM<br />
              <a href="https://www.google.com/maps/dir/?api=1&destination=Yucatan+Mexican+Restaurant+123+Main+Street+City+State+ZIP"
                  target="_blank" className="directions-link">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                      <path
                          d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                  </svg>
                  GET DIRECTIONS
              </a>
          </div>

          <footer className="site-footer">
              <div className="footer-content">
                  <div className="footer-text">
                      <p>200 Sandifer Ln</p>
                      <p>Pineville, LA 71360</p>
                      <p>(318) 448-4424</p>
                  </div>
                  <img src='images/full-logo.jpg' alt="Logo" classNameName="footer-logo"/>
              </div>
          </footer>
      </div>
      <Footer/>
    </>
  );
}

export default Location
