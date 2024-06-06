import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center py-4 border-b mb-4">
      <h1 className="text-xl font-bold"><Link to="/">Shopping Cart</Link></h1>
      <div className="relative">
        <Link to="/cart" className="relative">
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-sm flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
