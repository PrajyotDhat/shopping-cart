import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'Watches', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4Shyu00w382fCCjm592Pt6ow3fR1GdfF0w&s' },
    { id: 2, name: 'Travel Bags', price: 20, image: 'https://www.sportbags.ch/images/categories/douchebags-little-bastard-60l-roller-bag-150px.webp' },
    { id: 3, name: 'Cups', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkyRKpyH2ruZ_oQDtA79KtVPzOrz_7q4KPA&s' },
    { id: 4, name: 'Cameras', price: 55, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQq5Ih3yf6Y4wPIk66RDaxw-FsBA5Oei1EHg&s' },
    { id: 5, name: 'Mobiles', price: 42, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmiKCevaC21BQHpLJnxuFpgTTncC0idRmWw&s' },
    { id: 6, name: 'Laptops', price: 30, image: 'https://computechstore.in/wp-content/uploads/2024/01/HP-Laptop-15-1-1-150x150.jpg' },
];

function ProductList({ addToCart }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart}  />
            ))}
        </div>
    );
}

export default ProductList;


