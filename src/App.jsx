import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = ({ onAddToCart, cartCount }) => {
  return (
    <>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer onAddToCart={onAddToCart} />} />
        <Route 
          path="/contact" 
          element={
            <div className="container">
              <h2>Contacto</h2>
              <p>Puedes contactarnos en: contacto@mitienda.com</p>
            </div>
          } 
        />
        <Route 
          path="*" 
          element={
            <div className="container">
              <h2>Error 404</h2>
              <p>Página no encontrada</p>
            </div>
          } 
        />
      </Routes>
    </>
  );
};

export default App;
