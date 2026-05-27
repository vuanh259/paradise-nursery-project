import React from 'react';

const CartItem = ({ item, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: {item.price}</p>
      <div className="quantity-controls">
        <button onClick={onDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrement}>+</button>
      </div>
      <button onClick={onDelete} className="delete-btn">Delete</button>
    </div>
  );
};

export default CartItem;
