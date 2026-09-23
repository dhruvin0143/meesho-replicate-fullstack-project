import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price-row">
          <span className="price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="discount">{product.discount}% off</span>
          )}
        </div>
        <div className="free-delivery-badge">Free Delivery</div>
        <div className="product-rating-row">
          <div className="rating-badge">
            <span>{product.rating}</span>
            <FaStar className="star-icon" />
          </div>
          <span className="rating-count">{product.ratingCount} Reviews</span>
          {product.rating > 4.2 && <span className="trusted-badge">mTrusted</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
