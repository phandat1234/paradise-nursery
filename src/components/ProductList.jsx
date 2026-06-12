import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';

const plantsData = [
  {
    category: '🌵 Succulents & Cacti',
    plants: [
      { name: 'Aloe Vera', price: 12.99, image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=300', description: 'Great for skin & easy to care for.' },
      { name: 'Echeveria', price: 9.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=300', description: 'Rosette-shaped beauty.' },
      { name: 'Jade Plant', price: 14.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300', description: 'Symbol of good luck.' },
      { name: 'Prickly Pear Cactus', price: 11.99, image: 'https://images.unsplash.com/photo-1551893478-d5e891e3f1d6?w=300', description: 'Iconic desert cactus.' },
      { name: 'Haworthia', price: 8.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300', description: 'Perfect for low light.' },
      { name: 'Zebra Plant', price: 10.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300', description: 'Striking striped leaves.' },
    ],
  },
  {
    category: '🌿 Tropical Foliage',
    plants: [
      { name: 'Monstera Deliciosa', price: 29.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300', description: 'Iconic split leaves.' },
      { name: 'Bird of Paradise', price: 39.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=300', description: 'Dramatic tropical look.' },
      { name: 'Pothos', price: 7.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300', description: 'Nearly indestructible vine.' },
      { name: 'Peace Lily', price: 17.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e4de6?w=300', description: 'Air purifier & elegant bloomer.' },
      { name: 'Philodendron', price: 19.99, image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=300', description: 'Heart-shaped glossy leaves.' },
      { name: 'Snake Plant', price: 22.99, image: 'https://images.unsplash.com/photo-1620803366004-119b57f54cd6?w=300', description: 'Thrives on neglect.' },
    ],
  },
  {
    category: '🌸 Flowering Plants',
    plants: [
      { name: 'Orchid', price: 24.99, image: 'https://images.unsplash.com/photo-1566842600175-97dca489844f?w=300', description: 'Elegant and long-lasting blooms.' },
      { name: 'African Violet', price: 13.99, image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=300', description: 'Compact and colorful.' },
      { name: 'Anthurium', price: 21.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=300', description: 'Waxy red heart-shaped spathes.' },
      { name: 'Bromeliad', price: 18.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300', description: 'Tropical flair with vivid color.' },
      { name: 'Kalanchoe', price: 11.99, image: 'https://images.unsplash.com/photo-1551893478-d5e891e3f1d6?w=300', description: 'Cheery clusters of tiny flowers.' },
      { name: 'Begonia', price: 15.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300', description: 'Lush blooms in many colors.' },
    ],
  },
];

function ProductList({ navigateTo }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">🌿 Paradise Nursery</span>
        <ul className="navbar-links">
          <li><a href="#" onClick={() => navigateTo('landing')}>Home</a></li>
          <li><a href="#" onClick={() => navigateTo('products')}>Plants</a></li>
          <li>
            <span className="cart-icon" onClick={() => navigateTo('cart')}>
              🛒
              {totalCartCount > 0 && (
                <span className="cart-count">{totalCartCount}</span>
              )}
            </span>
          </li>
        </ul>
      </nav>

      {/* Product Listing */}
      <div className="product-list">
        <h1>Our Plant Collection</h1>

        {plantsData.map((categoryGroup) => (
          <div className="category-section" key={categoryGroup.category}>
            <h2>{categoryGroup.category}</h2>
            <div className="plants-grid">
              {categoryGroup.plants.map((plant) => (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#777', marginBottom: '0.5rem' }}>
                    {plant.description}
                  </p>
                  <p className="price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={!!addedItems[plant.name]}
                  >
                    {addedItems[plant.name] ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
