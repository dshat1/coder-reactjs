import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#ccc' }}>
      <h1>Mi Tienda</h1>
      <ul style={{ display: 'flex', listStyleType: 'none', gap: '10px' }}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
