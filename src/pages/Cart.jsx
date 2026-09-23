import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import CartItem from '../components/CartItem/CartItem';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, getCartCount, getCartTotal, getCartDiscount, updateQuantity } = useContext(CartContext);
  const count = getCartCount();
  const total = getCartTotal();
  const discount = getCartDiscount();
  
  const productPrice = total + discount;

  // Edit Modal State
  const [editingItem, setEditingItem] = useState(null);
  const [editQty, setEditQty] = useState(1);

  const handleEditClick = (item) => {
    setEditingItem(item);
    setEditQty(item.quantity);
  };

  const closeEditModal = () => {
    setEditingItem(null);
  };

  const saveEdit = () => {
    if (editingItem && editQty > 0) {
      updateQuantity(editingItem.id, editQty);
    }
    closeEditModal();
  };

  return (
    <>
      <Header />
      
      <div className="cart-stepper-container">
        <div className="stepper">
          <div className="step active">
            <div className="step-circle">1</div>
            <span className="step-label">Cart</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-circle inactive">2</div>
            <span className="step-label inactive">Address</span>
          </div>
          <div className="step-line inactive"></div>
          <div className="step">
            <div className="step-circle inactive">3</div>
            <span className="step-label inactive">Payment</span>
          </div>
          <div className="step-line inactive"></div>
          <div className="step">
            <div className="step-circle inactive">4</div>
            <span className="step-label inactive">Summary</span>
          </div>
        </div>
      </div>

      <div className="cart-page container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img src="https://images.unsplash.com/photo-1558769132-cb1fac08c04b?w=300&auto=format&fit=crop&q=60" alt="Empty Cart" />
            <h2>Your cart is empty</h2>
            <Link to="/" className="btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <h2 className="section-title-cart">Product Details</h2>
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} onEdit={handleEditClick} />
                ))}
              </div>
            </div>
            
            <div className="cart-summary-section">
              <h2 className="section-title-cart">Price Details ({count} Item{count !== 1 && 's'})</h2>
              
              <div className="summary-card">
                <div className="summary-row">
                  <span className="summary-label-muted">Product Price</span>
                  <span>+ ₹{productPrice}</span>
                </div>
                <div className="summary-row discount-row">
                  <span>Total Discounts</span>
                  <span>- ₹{discount}</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-row total-row">
                  <span>Order Total</span>
                  <span>₹{total}</span>
                </div>
                
                <div className="yay-discount">
                  Yay! Your total discount is ₹{discount}
                </div>
                
                <div className="continue-note">
                  Clicking on 'Continue' will not deduct any money
                </div>
                
                <button className="btn-primary checkout-btn">
                  Continue
                </button>
                
                <div className="safe-banner">
                  <img src="https://images.unsplash.com/photo-1614064641936-7329971bcaca?w=400&auto=format&fit=crop" alt="Meesho Safe" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal Overlay */}
      {editingItem && (
        <div className="modal-backdrop" onClick={closeEditModal}>
          <div className="edit-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>EDIT ITEM</h3>
              <button className="close-btn" onClick={closeEditModal}>✕</button>
            </div>
            
            <div className="modal-body">
              <div className="edit-item-preview">
                <img src={editingItem.image} alt={editingItem.title} className="edit-item-img" />
                <div className="edit-item-info">
                  <h4 className="edit-item-title">{editingItem.title}</h4>
                  <div className="edit-item-price-row">
                    <span className="price">₹{editingItem.price}</span>
                    <span className="original-price">₹{editingItem.originalPrice}</span>
                    <span className="discount">{editingItem.discount}% off</span>
                  </div>
                </div>
              </div>

              <div className="edit-controls">
                <div className="edit-control-group">
                  <label>Size</label>
                  <select className="size-select">
                    <option>Free Size</option>
                  </select>
                </div>
                
                <div className="edit-control-group">
                  <label>Qty</label>
                  <div className="qty-controls">
                    <button onClick={() => setEditQty(Math.max(1, editQty - 1))}>−</button>
                    <span>{editQty}</span>
                    <button onClick={() => setEditQty(editQty + 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="modal-total-row">
                <span>Total Price</span>
                <span className="modal-total-price">₹{editingItem.price * editQty}</span>
              </div>
              <button className="btn-primary modal-continue-btn" onClick={saveEdit}>
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
