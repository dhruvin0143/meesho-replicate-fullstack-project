import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item, onEdit }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item-card">
      <div className="cart-item-main">
        <div className="cart-item-image">
          <img src={item.image} alt={item.title} />
        </div>
        
        <div className="cart-item-details">
          <div className="cart-item-header">
            <h3 className="cart-item-title">{item.title}</h3>
            <span className="edit-btn" onClick={() => onEdit(item)}>EDIT</span>
          </div>
          
          <div className="cart-item-price-row">
            <span className="price">₹{item.price}</span>
            {item.originalPrice && (
              <span className="original-price">₹{item.originalPrice}</span>
            )}
            {item.discount && (
              <span className="discount">{item.discount}% off</span>
            )}
          </div>

          <p className="returns-text">All issue easy returns</p>
          
          <p className="size-qty-text">Size: Free Size • Qty: {item.quantity}</p>
          
          <button 
            className="remove-btn" 
            onClick={() => removeFromCart(item.id)}
          >
            ✕ REMOVE
          </button>
        </div>
      </div>
      
      <div className="cart-item-footer">
        Sold by: IVIARA
      </div>
    </div>
  );
};

export default CartItem;
