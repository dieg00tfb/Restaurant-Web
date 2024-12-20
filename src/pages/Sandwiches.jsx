import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Sanwiches() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">SANDWICHES</h2>
      <div class="menu-item-page">
          <p>
              <span class="menu-item">Yucatan Burger</span>
              <span class="dots"></span>
              <span class="menu-price">$7.99</span><br />
          </p>
          <p>
              <span class="menu-description">Grilled to your taste and garnished with lettuce, tomato, onions, and
                  pickles. Served with French fries and sliced avocados.</span>
          </p>

          <p>
              <span class="menu-item">Cheese Burger</span>
              <span class="dots"></span>
              <span class="menu-price">$6.99</span><br />
          </p>
          <p>
              <span class="menu-description">Served with French fries and garnished with lettuce and tomato.</span>
          </p>

          <p>
              <span class="menu-item">Chicken Sandwich w/cheese sauce</span>
              <span class="dots"></span>
              <span class="menu-price">$7.99</span><br />
          </p>
          <p>
              <span class="menu-description">Boneless breast of chicken, grilled and topped with cheese sauce and
                  garnished with lettuce, tomato, and onion.</span>
          </p>
      </div>
      <Footer/>
    </>
  );
}

export default Sanwiches
