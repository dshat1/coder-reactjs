import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p style={styles.price}>${product.price}</p>
      <Link to={`/item/${product.id}`} style={styles.button}>Ver detalle</Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "10px"
  },
  price: {
    fontWeight: "bold",
    color: "#333"
  },
  button: {
    marginTop: "10px",
    display: "inline-block",
    padding: "8px 12px",
    backgroundColor: "#111",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px"
  }
};

export default Item;
