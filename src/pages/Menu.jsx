import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {
  return(  
    <>
      <Header/>
      <div class="top-center-container">
        <div class="top-center-text">
            <h1>OUR MENU</h1>
        </div>
      </div>

      <div>
        <div className="menu-wrapper">
            <div className="menu-container">
                <div className="menu-dish">
                    <Link to="/express-lunch">
                        <img src='speedy-gonzales.PNG' alt="speedy-gonzales" className="express-lunch-image" />
                        <p className="menu-name">EXPRESS LUNCH</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/lunch-specialties">
                        <img src='quesadilla-image.jpg' alt="lunch-specialties-quesadilla" className="lunch-specialties-image" />
                        <p className="menu-name">LUNCH SPECIALTIES</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/appetizers">
                        <img src='appetizers-image.jpg' alt="appetizers-chips" className="appetizers-image" />
                        <p className="menu-name">APPETIZERS</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/sandwiches">
                        <img src='cheesburger_image.jpg' alt="cheese_burger_image" className="sandwiches-image" />
                        <p className="menu-name">SANDWICHES</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/side-orders">
                        <img src='side-orders-image.png' alt="rice-beans" className="side-orders-image" />
                        <p className="menu-name">SIDE ORDERS</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/combination-dinners">
                        <img src='combo-5.PNG' alt="combo-#5" className="combo-dinner-image" />
                        <p className="menu-name">COMBINATION DINNERS</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/vegetarian-combinations">
                        <img src='wet-burrito-image.jpg' alt="yucatan-special-milanesas" className="yucatan-specials-image" />
                        <p className="menu-name">VEGETARIAN COMBINATIONS</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/yucatan-specials">
                        <img src='foodimage.jpg' alt="yucatan-special-milanesas" className="yucatan-specials-image" />
                        <p className="menu-name">YUCATAN SPECIALS</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/seafood">
                        <img src='El Amigo.PNG' alt="seafood-el-amigo" className="seafood-image" />
                        <p className="menu-name">SEAFOOD</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/street-tacos">
                        <img src='street-tacos-image.png' alt="street-tacos" className="street-tacos-image" />
                        <p className="menu-name">STREET TACOS</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/kids-menu">
                        <img src='chicken-nugget.jpg' alt="kids-menu-chicken-nuggets" className="kids-menu-image" />
                        <p className="menu-name">KIDS MENU</p>
                    </Link>
                </div>
                <div className="menu-dish">
                    <Link to="/deserts">
                        <img src='dessert_image.jpg' alt="churros" className="desserts-image" />
                        <p className="menu-name">DESSERTS</p>
                    </Link>
                </div>
            </div>
            <div className="notice">
                <p> Notice: Approximate pre-cooked weights, actual weight may vary. May be cooked to order. Consuming
                    raw or
                    undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness,
                    especially if you have certain medical conditions.

                    Menu items may contain or come into contact with wheat, eggs, shellfish, tree-nuts, milk and other
                    major
                    allergens. If a person in your party has a food allergy, please contact the restaurant to place your
                    order and notify our team of any allergy. Because routine food preparation techniques, such as
                    common
                    oil frying and use of common food preparation
                    equipment and surfaces, may allow contact among various food items, we cannot guarantee any food
                    items
                    to be completely allergen-free.

                    2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional
                    nutrition
                    information available upon request.
                </p>
            </div>
        </div>
      </div>

      
      <Footer/>
    </>
  );
}

export default Menu
