import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Appetizers from './pages/Appetizers';
import Combination_Dinner from './pages/Combination_Dinner';
import Deserts from './pages/Deserts';
import Express_Lunch from './pages/Express_Lunch';
import Kids_Menu from './pages/Kids_Menu';
import Lunch_Specialties from './pages/Lunch_Specialties';
import Sanwiches from './pages/Sandwiches';
import Seafood from './pages/Seafood';
import Side_Orders from './pages/Side_Orders';
import Street_Tacos from './pages/Street_Tacos';
import Vegetarian_Combinations from './pages/Vegetarian_Combinations';
import Yucatan_Specials from './pages/Yucatan_Specials';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/appetizers" element={<Appetizers />} />
        <Route path="/combination-dinners" element={<Combination_Dinner />} />
        <Route path="/deserts" element={<Deserts/>} />
        <Route path="/express-lunch" element={<Express_Lunch/>} />
        <Route path="/kids-menu" element={<Kids_Menu/>} />
        <Route path="/lunch-specialties" element={<Lunch_Specialties/>} />
        <Route path="/sandwiches" element={<Sanwiches/>} />
        <Route path="/seafood" element={<Seafood/>} />
        <Route path="/side-orders" element={<Side_Orders/>} />
        <Route path="/street-tacos" element={<Street_Tacos/>} />
        <Route path="/vegetarian-combinations" element={<Vegetarian_Combinations/>} />
        <Route path="/yucatan-specials" element={<Yucatan_Specials/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </div>
  );
}

export default App;
