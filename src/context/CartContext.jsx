import { createContext, useContext, useEffect, useState } from "react";
import { getSessionId } from "../utils/session";
import { db } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const sessionId = getSessionId();

  // Cargar carrito desde Firebase
  useEffect(() => {
    const ref = doc(db, "carts", sessionId);
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.exists()) {
        setCart(snapshot.data().items || []);
      }
    });
    return () => unsubscribe();
  }, []);

  // Guardar carrito en Firebase cada vez que cambia
  useEffect(() => {
    const ref = doc(db, "carts", sessionId);
    setDoc(ref, { items: cart }, { merge: true });
  }, [cart]);

  // Agregar producto
  const addToCart = (item) => {
    const existing = cart.find((p) => p.id === item.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        )
      );
    } else {
      setCart([...cart, item]);
    }
  };

  // Quitar producto
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Cantidad total de ítems
  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Monto total del carrito
  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalItems,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
