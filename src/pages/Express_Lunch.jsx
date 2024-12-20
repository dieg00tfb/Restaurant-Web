import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Express_Lunch() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">Express Lunch</h2>
      <div class="menu-item-page">
          <p>
              <span class="menu-item">Taco Salad</span>
              <span class="dots"></span>
              <span class="menu-price">$7.99</span><br />
          </p>
          <p>
              <span class="menu-description">Chicken or Beef. A crisp flour tortilla with melted cheese sauce topped with
                  lettuce, tomato, cheese, and sour cream.</span>
          </p>

          <p>
              <span class="menu-item">Chicken Salad</span>
              <span class="dots"></span>
              <span class="menu-price">$7.99</span><br />
          </p>
          <p>
              <span class="menu-description">Grilled chicken breast topped with lettuce, onions, tomato, peppers and
                  cheese.</span>
          </p>

          <p>
              <span class="menu-item">Speedy Gonzales</span>
              <span class="dots"></span>
              <span class="menu-price">$7.99</span><br />
          </p>
          <p>
              <span class="menu-description">One enchilada, one taco, filled with your choice of chicken or beef and
                  served with your choice of rice or beans.</span>
          </p>

          <p>
              <span class="menu-item">Huevos with Choirizo</span>
              <span class="dots"></span>
              <span class="menu-price">$7.99</span><br />
          </p>
          <p>
              <span class="menu-description">Scrambled eggs with chorizo. Served with Mexican rice and beans and
                  tortillas.</span>
          </p>
      </div>
      <Footer/>
    </>
  );
}

export default Express_Lunch
