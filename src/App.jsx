import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'landing') {
    return (
      <div className="landing-page">
        <div className="landing-overlay">
          <h1>🌿 Paradise Nursery</h1>
          <p>
            Bring the beauty of nature into your home. Explore our hand-picked
            collection of premium houseplants, carefully grown and ready to thrive.
          </p>
          <button
            className="get-started-btn"
            onClick={() => navigateTo('products')}
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }

  if (currentPage === 'cart') {
    return <CartItem navigateTo={navigateTo} />;
  }

  return <ProductList navigateTo={navigateTo} />;
}

export default App;
