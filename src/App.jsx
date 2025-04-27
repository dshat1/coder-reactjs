import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Button from './components/Button';

const App = ({ onAddToCart }) => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      <div>
        <Button onClick={onAddToCart}>Agregar al carrito</Button>
      </div>
    </>
  );
};

export default App;