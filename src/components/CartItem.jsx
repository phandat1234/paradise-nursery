import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice';

function CartItem({ navigateTo }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [checkoutMsg, setCheckoutMsg] = useState('');

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckout = () => {
    setCheckoutMsg('🎉 Coming Soon! Thank you for shopping at Paradise Nursery.');
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

      {/* Cart Page */}
      <div className="cart-page">
        <h1>🛒 Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button
              className="continue-btn"
              style={{ marginTop: '1rem' }}
              onClick={() => navigateTo('products')}
            >
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                {/* Thumbnail */}
                <img src={item.image} alt={item.name} />

                {/* Info */}
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Unit Price: <strong>${item.price.toFixed(2)}</strong></p>
                  <p>
                    Total:{' '}
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="cart-item-controls">
                  <button onClick={() => handleDecrease(item)}>−</button>
                  <span style={{ minWidth: '24px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.name)}
                    title="Remove item"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}

            {/* Summary */}
            <div className="cart-summary">
              <h2>Total Amount: ${totalCost.toFixed(2)}</h2>

              {checkoutMsg && (
                <p style={{ color: '#4caf50', margin: '0.75rem 0', fontWeight: 'bold' }}>
                  {checkoutMsg}
                </p>
              )}

              <div className="cart-actions">
                <button
                  className="continue-btn"
                  onClick={() => navigateTo('products')}
                >
                  ← Continue Shopping
                </button>
                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
