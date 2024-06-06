import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cart, addToCart, removeFromCart, adjustQuantity, setCheckout }) {
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="border-b p-4 flex items-center rounded-2xl bg-purple-100">
                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                <div className="flex-grow">
                  <div className="font-bold">{item.name}</div>
                  <div>${item.price}</div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => adjustQuantity(item, -1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded mr-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => adjustQuantity(item, 1)}
                    className="bg-gray-300 text-black px-2 py-1 rounded ml-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-lg font-bold mt-4">Total: ${totalCost.toFixed(2)}</div>
          <Link to="/checkout">
            <button
              onClick={() => setCheckout(true)}
              className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            >
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartPage;

