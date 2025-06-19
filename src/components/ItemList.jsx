import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div style={styles.grid}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px"
  }
};

export default ItemList;
