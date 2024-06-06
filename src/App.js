import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const adjustQuantity = (product, amount) => {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + amount } : item
    ).filter(item => item.quantity > 0));
  };

  return (

    <div className="container mx-auto p-4">
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              adjustQuantity={adjustQuantity}
              setCheckout={setCheckout}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </div>

  );
}

export default App;

