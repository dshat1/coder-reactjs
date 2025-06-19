import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart, removeItem, clearCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-5"
      >
        <h2 className="fs-3">🛒 Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Volver al catálogo
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mt-5"
    >
      <h2 className="mb-4">🛍️ Carrito de compras</h2>
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name} (${item.price}) x{item.quantity}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeItem(item.id)}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <p className="lead">Total: ${cartTotal()}</p>
      <button className="btn btn-secondary me-2" onClick={clearCart}>
        Vaciar carrito
      </button>
      <Link to="/checkout" className="btn btn-success">
        Finalizar compra
      </Link>
    </motion.div>
  );
};

export default Cart;
