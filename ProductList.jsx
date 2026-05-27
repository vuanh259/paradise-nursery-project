import React from 'react';

const ProductList = () => {
  const plants = [
    { name: 'Snake Plant', price: '$15', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921' },
    { name: 'Spider Plant', price: '$12', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42' },
    { name: 'Peace Lily', price: '$18', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45' }
  ];

  return (
    <div className="product-list">
      <h2>Our Beautiful Plants</h2>
      <div className="products-grid">
        {plants.map((plant, index) => (
          <div key={index} className="product-card">
            <img src={plant.image} alt={plant.name} style={{ width: '150px' }} />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
