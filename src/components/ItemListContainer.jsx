import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{greeting}</h2>
      <p>Aquí estará el catálogo de productos.</p>
    </div>
  );
};

export default ItemListContainer;
