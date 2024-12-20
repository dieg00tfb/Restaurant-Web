import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import './Menu_Item.css'

function Cart() {
  return(  
    <>
      <Header/>
      <h1 className="cart-title">Your Order</h1>
      <div className="cart-box">
          
      </div>
      <Footer/>
    </>
  );
}

export default Cart
