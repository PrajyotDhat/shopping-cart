import React from 'react';

function Cart({ cart, removeFromCart, setCheckout }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="border-b py-2 flex justify-between items-center">
                <div>
                  {item.name} - ${item.price}
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setCheckout(true)}
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

