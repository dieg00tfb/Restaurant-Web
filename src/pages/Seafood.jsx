import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Seafood() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">SEAFOOD</h2>
      <div class="menu-item-page">
        <p>
            <span class="menu-item">Shrimp Quesadilla</span>
            <span class="dots"></span>
            <span class="menu-price">$15.99</span><br />
        </p>
        <p>
            <span class="menu-description">A grilled flour tortilla with shrimp, cheese, sauteed onions, bell peppers
                and mushrooms. Garnished with lettuce, tomatoes, and sour cream.</span>
        </p>

        <p>
            <span class="menu-item">Enchilada Ballarta</span>
            <span class="dots"></span>
            <span class="menu-price">$12.99</span><br />
        </p>
        <p>
            <span class="menu-description">Four rolled flour tortillas, stuffed with shrimp and crab meat topped with
                cheese sauce.</span>
        </p>

        <p>
            <span class="menu-item">Shrimp Chimichanga</span>
            <span class="dots"></span>
            <span class="menu-price">$15.99</span><br />
        </p>
        <p>
            <span class="menu-description">We stuff a flour tortilla with shrimp, sauteed onions, mushrooms, bell
                peppers, and tomato then deep fried to a golden br /own. Topped with cheese sauce, lettuce, and sour
                cream. Served with Mexican rice and beans.</span>
        </p>

        <p>
            <span class="menu-item">Coktel</span>
            <span class="dots"></span>
            <span class="menu-price">$13.99</span><br />
        </p>
        <p>
            <span class="menu-description">12 shrimp with tomato juice, pico de gallo, avocado and saltine
                crackers.</span>
        </p>

        <p>
            <span class="menu-item">Camarones a la Diabla</span>
            <span class="dots"></span>
            <span class="menu-price">$16.99</span><br />
        </p>
        <p>
            <span class="menu-description">12 grilled shrimp in a spicy sauce. Served with rice, beans and
                tortillas.</span>
        </p>

        <p>
            <span class="menu-item">Mar y Tierra</span>
            <span class="dots"></span>
            <span class="menu-price">$18.99</span><br />
        </p>
        <p>
            <span class="menu-description"> One dozen shrimp with marinated chicken and steak and chile rellenos and
                sour cream. Served with Mexican rice, lettuce, and sour cream.</span>
        </p>

        <p>
            <span class="menu-item">Pescador</span>
            <span class="dots"></span>
            <span class="menu-price">$16.99</span><br />
        </p>
        <p>
            <span class="menu-description"> One dozen shrimp seasoned with our special recipe. Sauteed with vegetables
                and tomato. Served with Mexican rice, lettuce, sour cream and onions.</span>
        </p>

        <p>
            <span class="menu-item">El Amigo</span>
            <span class="dots"></span>
            <span class="menu-price">$16.99</span><br />
        </p>
        <p>
            <span class="menu-description">Two flour tortillas rolled with marinated steak and 1/2 dozen shrimp, topped
                with enchilada cheese sauces served with Mexican, lettuce and sour cream.</span>
        </p>

        <p>
            <span class="menu-item">Enchiladas Yucatan</span>
            <span class="dots"></span>
            <span class="menu-price">$12.99</span><br />
        </p>
        <p>
            <span class="menu-description">Three shrimp corn tortilla enchiladas topped with cheese sauce. Served with
                rice and beans.</span>
        </p>

        <p>
            <span class="menu-item">Fish Tacos</span>
            <span class="dots"></span>
            <span class="menu-price">$11.99</span><br />
        </p>
        <p>
            <span class="menu-description">Two flour tortillas stuffed with fish, lettuce, shredded cheese and served
                with rice and beans.</span>
        </p>

        <p>
            <span class="menu-item">Chimichanga Seafood</span>
            <span class="dots"></span>
            <span class="menu-price">$12.99</span><br />
        </p>
        <p>
            <span class="menu-description">We stuffed a flour tortilla with crab meat and shrimp, then deep fried to
                golden br /own. Topped with cheese sauce, lettuce and sour cream. Served with Mexican rice and
                beans.</span>
        </p>

        <p>
            <span class="menu-item">Fillet a la Plancha</span>
            <span class="dots"></span>
            <span class="menu-price">$16.99</span><br />
        </p>
        <p>
            <span class="menu-description">Two grilled fish filets topped with shrimp. Served with rice, lettuce,
                avocado, and tomato.</span>
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default Seafood
