const CartItem = ({ item, onRemove }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.name} (${item.price}) x{item.quantity}
      <button className="btn btn-sm btn-danger" onClick={() => onRemove(item.id)}>
        Quitar
      </button>
    </li>
  );
};

export default CartItem;
