const Root = () => {
    const [cartCount, setCartCount] = useState(0);
  
    const handleAddToCart = () => {
      setCartCount(cartCount + 1);
    };
  
    return <App cartCount={cartCount} onAddToCart={handleAddToCart} />;
  };