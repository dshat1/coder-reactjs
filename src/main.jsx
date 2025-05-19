import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

const Root = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <BrowserRouter>
      <App cartCount={cartCount} onAddToCart={handleAddToCart} />
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
