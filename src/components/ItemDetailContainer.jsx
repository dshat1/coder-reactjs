import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [itemId]);

  const handleAddToCart = () => {
    addToCart({
      ...item,
      quantity: quantity,
    });
  };

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (!item) return <p>Producto no encontrado</p>;

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <div>
        <img src={item.image} alt={item.name} style={{ maxWidth: "300px" }} />
      </div>
      <div>
        <h2>{item.name}</h2>
        <p className="text-muted">${item.price}</p>
        <p>{item.description}</p>

        {/* Selector de cantidad */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ marginRight: "0.5rem" }}>Cantidad:</label>
          <input
            type="number"
            value={quantity}
            min={1}
            max={item.stock ?? 99}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ width: "60px" }}
          />
        </div>

        <button onClick={handleAddToCart} className="btn btn-primary mt-3">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
