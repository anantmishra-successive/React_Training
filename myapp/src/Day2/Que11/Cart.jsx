<<<<<<< HEAD
// Cart.jsx
import React from 'react';
import { useCart } from './CartContext';

export default function Cart() {
  const { cart } = useCart();

  // Calculate the total price
=======

import React from 'react';
import { Carts } from './CartContext';

export default function Cart() {
  const { cart } = Carts();

  
>>>>>>> 74b963610f4fd2543feaa8804222a7157cc95685
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </li>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="font-bold">Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </ul>
      )}
    </div>
  );
}
