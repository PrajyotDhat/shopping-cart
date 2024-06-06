import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="border p-4 rounded-2xl bg-cyan-300 hover:bg-sky-500 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
      <img src={product.image} alt={product.name} className="mb-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-orange-400 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;

