import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return(
    <div className='navbar'>
      <Link to="/"><img src="logo2.jpg" alt="" className='logo'/></Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
    </div>
  )
}


