// Products.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import './product.css'

export default function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products (you can replace this with your own data source)
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (


    <div className='flex '>
  <div className=" products flex">
      {products.map((product) => (
        <div key={product.id} className="product flex flex-row bg-white shadow-md rounded-lg p-4">
          <img src={product.thumbnail} alt={product.title} className="h-48 rounded-md" />
          <h1 className="text-lg font-bold">{product.title}</h1>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </div>
  
  );
}
