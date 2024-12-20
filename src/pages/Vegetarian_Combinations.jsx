import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import './Menu_Item.css'

function Vegetarian_Combinations() {
  return(  
    <>
      <Header/>
      <h2 class="menu-title">Vegetarian Combinations</h2>
      <div class="menu-item-page">
        <p>
            <span class="menu-item">Vegetarian Fajitas</span>
            <span class="dots"></span>
            <span class="menu-price">$9.99</span><br />
        </p>
        <p>
            <span class="menu-description">With sauteed onions, bell peppers, tomatoes, mushrooms and garnihed with
                lettuce, sour cream. Served with Mexican rice and beans and three tortillas</span>
        </p>

        <p>
            <span class="menu-item">Vegetarian Burrito</span>
            <span class="dots"></span>
            <span class="menu-price">$9.99</span><br />
        </p>
        <p>
            <span class="menu-description">Two flour tortillas, stuffed with sauteed onion, bell pepper, tomatoes,
                mushrooms, topped with cheese dip. Garnished with lettuce and sour cream. Served rice and beans.</span>
        </p>

        <p>
            <span class="menu-item">Vegetarian Quesadilla</span>
            <span class="dots"></span>
            <span class="menu-price">$9.99</span><br />
        </p>
        <p>
            <span class="menu-description">All vegetables, sauteed with onions, bell peppers, tomatoes, muchrooms.
                Served with lettuce and sour cream.</span>
        </p>


      </div>
      <Footer/>
    </>
  );
}

export default Vegetarian_Combinations





















