import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Side_Orders() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">SIDE ORDERS</h2>
      <div class="column-container">
        <div class="menu-column">
            <p>
                <span class="column-menu-item">Mexican Rice</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$2.25</span><br />
            </p>

            <p>
                <span class="column-menu-item">Rice w/ Cheese Sauce</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$3.25</span><br />
            </p>

            <p>
                <span class="column-menu-item">Refried Beans</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$2.25</span><br />
            </p>

            <p>
                <span class="column-menu-item">Sour Cream</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$1.99</span><br />
            </p>

            <p>
                <span class="column-menu-item">Pico de Gallo</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$1.99</span><br />
            </p>

            <p>
                <span class="column-menu-item">Grilled Vegetables</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$2.99</span><br />
            </p>

            <p>
                <span class="column-menu-item">French Fries</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$1.99</span><br />
            </p>

        </div>

        <div class="menu-column">
            <p>
                <span class="column-menu-item">Shredded Cheese</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$1.75</span><br />
            </p>

            <p>
                <span class="column-menu-item">Chiles Toreados</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$1.99</span><br />
            </p>

            <p>
                <span class="column-menu-item">Jalapenos</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$1.99</span><br />
            </p>

            <p>
                <span class="column-menu-item">Green Salsa Tomatillo</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$1.99</span><br />
            </p>

            <p>
                <span class="column-menu-item">Shrimp</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">(6)$4.99 (12)$8.99</span><br />
            </p>

            <p>
                <span class="column-menu-item">Flour or Corn Tortillas</span>
                <span class="column-dots"></span>
                <span class="column-menu-price">$0.99</span><br />
            </p>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Side_Orders





















