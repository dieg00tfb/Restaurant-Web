import { Header } from '../components/Header.jsx';
import{ Footer } from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import './Menu_Item.css'

function Login() {
  return(  
    <>
      <Header/>
      <div className="login-box">
          <h1>Log in</h1>
          <form action="/submit-login" method="post">
            <input type="text" placeholder="Username" name="username" required />
            <input type="password" placeholder="Password" name="password" required />
            <button type="submit">Login</button>
          </form>
          <h4>OR</h4>
            <div className="account-link">
              <Link to="/register">
                  <h3>Create an account</h3>
              </Link>
            </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login
