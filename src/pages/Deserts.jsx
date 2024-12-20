import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Deserts() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">DESSERTS</h2>
      <div class="menu-item-page">
          <p>
              <span class="menu-item">Sopapilla</span>
              <span class="dots"></span>
              <span class="menu-price">$4.99 (w/Ice Cream)$5.99</span><br />
          </p>
          <p>
              <span class="menu-description">A flour tortilla deep fried to a golden brown and topped with honey, butter
                  and cinnamon.</span>
          </p>

          <p>
              <span class="menu-item">Flan</span>
              <span class="dots"></span>
              <span class="menu-price">$4.99</span><br />
          </p>
          <p>
              <span class="menu-description">Traditional Mexico city-style creme, caramel cake, baked fresh daily.</span>
          </p>

          <p>
              <span class="menu-item">Fried Ice Cream</span>
              <span class="dots"></span>
              <span class="menu-price">$5.99</span><br />
          </p>
          <p>
              <span class="menu-description">Vanilla ice cream in a fried tortilla shell. Covered with whipped cream and
                  chocolate cream and chocolate syrup.</span>
          </p>

          <p>
              <span class="menu-item">Churros</span>
              <span class="dots"></span>
              <span class="menu-price">$5.99</span><br />
          </p>
          <p>
              <span class="menu-description">Vanilla ice cream in a fried tortilla shell. Covered with whipped cream and
                  chocolate cream and chocolate syrup.</span>
          </p>
      </div>
      <Footer/>
    </>
  );
}

export default Deserts
