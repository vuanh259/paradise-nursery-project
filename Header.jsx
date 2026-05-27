import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <header className="navbar">
      <div className="logo">Paradise Nursery</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#products">Plants</a>
      </nav>
      <div className="cart-icon">
        🛒 <span>Cart ({cartCount})</span>
      </div>
    </header>
  );
};

export default Header;
