import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';

const mockProducts = [
  { id: 1, name: "Laptop", description: "Una excelente laptop para trabajar", category: "electronics" },
  { id: 2, name: "Camiseta", description: "Camiseta cómoda y moderna", category: "fashion" },
  { id: 3, name: "Auriculares", description: "Auriculares con excelente calidad de sonido", category: "electronics" },
  { id: 4, name: "Zapatos", description: "Zapatos elegantes para toda ocasión", category: "fashion" }
];

const ItemDetailContainer = ({ onAddToCart }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        const product = mockProducts.find(product => product.id.toString() === itemId);
        resolve(product);
      }, 1000);
    });

    fetchItem.then((data) => setItem(data));
  }, [itemId]);

  return (
    <div className="container">
      {item ? (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Button onClick={onAddToCart}>Agregar al carrito</Button>
        </>
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
