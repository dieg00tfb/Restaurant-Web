import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Kids_Menu() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">KIDS MENU</h2>
      <div class="menu-item-page">

        <p>
            <span class="menu-item">Chicken Nuggets w/ French Fries</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>

        <p>
            <span class="menu-item">Cheese Burger w/ French Fries</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>

        <p>
            <span class="menu-item">Cheese Quesadilla w/ Mexican Rice</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>

        <p>
            <span class="menu-item">Taco: Chicken or Beef w/ Mexican Rice</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>

        <p>
            <span class="menu-item">Burrito: Chicken or Beef w/ Mexican Rice</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>

        <p>
            <span class="menu-item">Enchilada</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>
        <p>
            <span class="menu-description">Soft corn tortilla with choice of filling, served with enchilada sauce,
                cheeese and Mexican Rice.</span>
        </p>

        <p>
            <span class="menu-item">Mini Chimichanga</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>
        <p>
            <span class="menu-description">Shredded chicken or beef. Topped with cheese sauce.</span>
        </p>

        <p>
            <span class="menu-item">Chicken and Rice</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>

        <p>
            <span class="menu-item">French Fries w/ Fajita Meat</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>

        <p>
            <span class="menu-item">Nachos with Cheese</span>
            <span class="dots"></span>
            <span class="menu-price">$5.99</span><br />
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default Kids_Menu
