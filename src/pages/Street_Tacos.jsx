import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Street_Tacos() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">STREET TACOS</h2>
      <div class="menu-item-page">
        <p>
            <span class="menu-item">(3) Carnitas</span>
            <span class="dots"></span>
            <span class="menu-price">$13.99</span><br />
        </p>

        <p>
            <span class="menu-item">(3) Carne Asada</span>
            <span class="dots"></span>
            <span class="menu-price">$13.99</span><br />
        </p>

        <p>
            <span class="menu-item">(3) Campechanos</span>
            <span class="dots"></span>
            <span class="menu-price">$13.99</span><br />
        </p>

        <p>
            <span class="menu-item">(3) Grilled Chicken</span>
            <span class="dots"></span>
            <span class="menu-price">$13.99</span><br />
        </p>

        <p>
            <span class="menu-item">(3) Shrimp</span>
            <span class="dots"></span>
            <span class="menu-price">$13.99</span><br />
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default Street_Tacos





















