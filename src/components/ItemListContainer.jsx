import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProducts = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Camiseta", category: "fashion" },
  { id: 3, name: "Auriculares", category: "electronics" },
  { id: 4, name: "Zapatos", category: "fashion" }
];

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de llamada asíncrona
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000);
    });

    fetchProducts.then((data) => {
      if (categoryId) {
        setProducts(data.filter(product => product.category === categoryId));
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <p>Aquí está el catálogo de productos:</p>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link to={`/item/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListContainer;
