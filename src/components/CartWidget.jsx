import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ count = 0 }) => {
  return (
    <Link to="/cart" className="cart-widget">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
        alt="Carrito" 
        className="cart-icon"
      />
      <small>{count} {count === 1 ? 'producto' : 'productos'}</small>
    </Link>
  );
};

export default CartWidget;
