import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Hàm tính tổng số tiền của toàn bộ giỏ hàng theo yêu cầu
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  return (
    <div className="shopping-cart-container">
      <h2>Your Shopping Cart - e-plantShopping</h2>
      <div className="cart-total-header">
        <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
      </div>
      <div className="cart-items-list">
        {cartItems.map(item => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} style={{ width: '80px' }} />
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.cost}</p>
            <p>Subtotal: ${item.cost * item.quantity}</p>
            <div className="quantity-buttons">
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
            <button onClick={() => dispatch(removeItem(item.name))} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItem;
