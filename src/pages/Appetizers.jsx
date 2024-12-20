import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Appetizers() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">Appetizers</h2>
      <div class="column-container">
          <div class="menu-column">
              <p>
                  <span class="column-menu-item">Bean Dip</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$4.25</span><br />
              </p>

              <p>
                  <span class="column-menu-item">Guacamole Dip</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">(Small)$4.50 Large($8.99)</span><br />
              </p>

              <p>
                  <span class="column-menu-item">Cheese Dip</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">(Small)$4.50 Large($8.99)</span><br />
              </p>

              <p>
                  <span class="column-menu-item">Nachos with Cheese</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$5.50</span><br />
              </p>

              <p>
                  <span class="column-menu-item">Nachos with Beans</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$5.00</span><br />
              </p>

              <p>
                  <span class="column-menu-item">Nachos (Beef or Chicken)</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$7.50</span><br />
              </p>

              <p>
                  <span class="column-menu-item">Guacamole Salad</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$4.99</span><br />
              </p>

              <p>
                  <span class="column-menu-item">Chorizo Con Queso</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$6.99</span><br />
              </p>

              <p>
                  <span class="column-menu-item">Spinach & Artichoke Dip</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$7.99</span><br />
              </p>
          </div>

          <div class="menu-column">
              <p>
                  <span class="column-menu-item">Shrimp Tostadas</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">(2)$11.99</span><br />
              </p>
              <p>
                  <span class="column-menu-description">Hard shell filled with sour cream, fresh shimp, an avacado slice,
                      and pico de gallo.</span>
              </p>

              <p>
                  <span class="column-menu-item">Quesadilla Rellena</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$7.99</span><br />
              </p>
              <p>
                  <span class="column-menu-description">A flour tortilla stuffed with beef and beans served with lettuce
                      and sour cream.</span>
              </p>

              <p>
                  <span class="column-menu-item">Ceviche Tostadas</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">(2)$11.99</span><br />
              </p>
              <p>
                  <span class="column-menu-description">Flat crisp corn tortilla covered with ground fish and pico de
                      gallo</span>
              </p>

              <p>
                  <span class="column-menu-item">Nachos Yucatan</span>
                  <span class="column-dots"></span>
                  <span class="column-menu-price">$9.99</span><br />
              </p>
              <p>
                  <span class="column-menu-description">Cheese Nachos with assorted topping of beef, chicken, and refried
                      beans. All covered with lettuce, tomatoes, and sour cream.</span>
              </p>
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default Appetizers
