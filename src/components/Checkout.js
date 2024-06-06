import React from 'react';

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="border-b py-2 flex justify-between items-center ">
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <div className="text-lg font-bold mt-4">Total: ${total}</div>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Place Order
      </button>
    </div>
  );
}

export default Checkout;

