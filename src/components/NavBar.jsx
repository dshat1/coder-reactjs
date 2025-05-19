import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h1>Mi Tienda</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/electronics">Electrónica</Link></li>
        <li><Link to="/category/fashion">Moda</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
      <CartWidget count={cartCount} />
    </nav>
  );
};

export default NavBar;
