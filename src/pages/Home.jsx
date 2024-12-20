import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Home.css'

function Home() {
  return(  
    <>
      <Header/>
      <div className="index-page">
          <div className="image-placeholder">
              <img src="main-image.jpg" alt="Image Placeholder"/>
              <a href="/menu" className="menu-button1">VIEW MENU</a>
          </div>

          <h2 className="daily-title">DAILY SPECIALS</h2>
          <h3 className="daily-time">11:00am - 3:00pm</h3>
          <div className="daily-specials-container">
              <div className="first-row-wrapper">
                  <div className="first-row">
                      <div className="specials-dish">
                          <h2 className="specials-dish-day">Monday</h2>
                          <img src='fajitas_image.jpg' alt="fajitas" className="specials-dish-monday-image"/>
                          <p className="specials-dish-name">Faitjas (Chicken or Steak)</p>
                          <p className="specials-dish-price">$9.99</p>
                      </div>

                      <div className="specials-dish">
                          <h2 className="specials-dish-day">Tuesday</h2>
                          <img src='burrito_fajita_image.jpg' alt="burrito_fajita" className="specials-dish-tuesday-image"/>
                          <p className="specials-dish-name">Burrito Fajitas</p>
                          <p className="specials-dish-price">$8.99</p>
                      </div>

                      <div className="specials-dish">
                          <h2 className="specials-dish-day">Wednesday</h2>
                          <img src='pollo_special_image.jpg' alt="pollo_special" className="specials-dish-wednesday-image"/>
                          <p className="specials-dish-name">Pollo Special</p>
                          <p className="specials-dish-price">$7.99</p>
                      </div>

                      <div className="specials-dish">
                          <h2 className="specials-dish-day">Thursday</h2>
                          <img src='nachos_fajitas_image.jpg' alt="nachos_fajitas"
                              className="specials-dish-thursday-image"/>
                          <p className="specials-dish-name">Nachos Fajita (Chicken or Steak)</p>
                          <p className="specials-dish-price">$8.99</p>
                      </div>

                      <div className="specials-dish">
                          <h2 className="specials-dish-day">Friday</h2>
                          <img src='cheese-steak.PNG' alt="cheese-steak" className="specials-dish-friday-image"/>
                          <p className="specials-dish-name">Cheese Steak</p>
                          <p className="specials-dish-price">$7.99</p>
                      </div>
                  </div>
              </div>
            </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home
