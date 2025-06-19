import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      {/* Logo o nombre de la tienda */}
      <Link to="/" style={styles.logo}>
        🧢 MiTienda
      </Link>

      {/* Enlaces de navegación */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>🏠 Inicio</Link>
        <Link to="/category/remeras" style={styles.link}>👕 Remeras</Link>
        <Link to="/category/oversize" style={styles.link}>🧵 Oversize</Link>
        <Link to="/category/estampadas" style={styles.link}>🎨 Estampadas</Link>
      </div>
      {/* Widget del carrito */}
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#111",
    color: "#fff"
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    fontSize: "1rem",
    color: "#ccc",
    textDecoration: "none"
  }
};

export default NavBar;
