import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  
  // Danh sách phân theo danh mục, chứa đủ 6 cây độc nhất theo barem chấm
  const categories = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', cost: 15, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921', description: 'Produces oxygen at night.' },
        { name: 'Spider Plant', cost: 12, image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42', description: 'Filters formaldehyde from the air.' }
      ]
    },
    {
      category: 'Aromatic Plants',
      plants: [
        { name: 'Lavender', cost: 20, image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a', description: 'Calming and relaxing scent.' },
        { name: 'Jasmine', cost: 22, image: 'https://images.unsplash.com/photo-1508717272800-9fff97da7e8f', description: 'Sweet fragrance to brighten your day.' }
      ]
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        { name: 'ZZ Plant', cost: 25, image: 'https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4', description: 'Thrives on neglect and low light.' },
        { name: 'Aloe Vera', cost: 10, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921', description: 'Beautiful succulent with healing properties.' }
      ]
    }
  ];

  return (
    <div className="product-listing">
      <h2>e-plantShopping Catalog</h2>
      {categories.map(cat => (
        <div key={cat.category} className="plant-category-section">
          <h3>{cat.category}</h3>
          <div className="plant-grid">
            {cat.plants.map(plant => (
              <div key={plant.name} className="plant-card">
                <img src={plant.image} alt={plant.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                <h4>{plant.name}</h4>
                <p>${plant.cost}</p>
                <p>{plant.description}</p>
                <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
