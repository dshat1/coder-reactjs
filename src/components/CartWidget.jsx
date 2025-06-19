import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" style={styles.widget}>
      🛒 {totalItems() > 0 && <span style={styles.count}>{totalItems()}</span>}
    </Link>
  );
};

const styles = {
  widget: {
    fontSize: "1.4rem",
    color: "#fff",
    textDecoration: "none",
    position: "relative",
    marginLeft: "20px",
  },
  count: {
    backgroundColor: "red",
    borderRadius: "50%",
    padding: "2px 8px",
    color: "#fff",
    fontSize: "0.8rem",
    position: "absolute",
    top: "-10px",
    right: "-10px",
  },
};

export default CartWidget;
