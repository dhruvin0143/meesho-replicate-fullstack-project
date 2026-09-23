import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaAngleRight } from 'react-icons/fa';
import Header from '../components/Header/Header';
import CategoryBar from '../components/CategoryBar/CategoryBar';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <>
      <Header />
      <CategoryBar />
      <div className="product-details-page container">
        <div className="product-details-layout">
          
          {/* Left Column - Images */}
          <div className="product-gallery">
            <div className="thumbnails">
              <div className="thumbnail active">
                <img src={product.image} alt="thumb1" />
              </div>
              <div className="thumbnail">
                <img src={product.image} alt="thumb2" />
              </div>
              <div className="thumbnail">
                <img src={product.image} alt="thumb3" />
              </div>
            </div>
            
            <div className="main-image-container">
              <img src={product.image} alt={product.title} className="main-image" />
              <div className="action-buttons">
                <button className="btn-outline add-cart-btn-large" onClick={handleAddToCart}>
                  <FaShoppingCart /> Add to Cart
                </button>
                <button className="btn-primary buy-now-btn" onClick={handleAddToCart}>
                  <FaAngleRight /> Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="product-info-section">
            <div className="info-card basic-info">
              <h1 className="details-title">{product.title}</h1>
              <div className="details-price-row">
                <span className="details-price">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="details-original-price">₹{product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="details-discount">{product.discount}% off</span>
                )}
              </div>
              <div className="deal-badge">
                <span>Deal</span>
                <span className="deal-timer">04h : 55m : 01s</span>
              </div>
              <div className="details-rating-row">
                <div className="rating-badge">
                  <span>{product.rating}</span>
                  <FaStar className="star-icon" />
                </div>
                <span className="rating-count">{product.ratingCount} Ratings, 14 Reviews</span>
              </div>
            </div>

            <div className="info-card select-size">
              <h3>Select Size</h3>
              <div className="size-pills">
                <div className="size-pill active">Free Size</div>
              </div>
            </div>

            <div className="info-card highlights">
              <div className="highlights-header">
                <h3>Product Highlights</h3>
                <span className="copy-btn">COPY</span>
              </div>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <span className="highlight-label">Net Quantity (N)</span>
                  <span className="highlight-value">5</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">Brand</span>
                  <span className="highlight-value">ANUGRAH ENTERPRISE</span>
                </div>
              </div>
              <div className="additional-details">
                <span>Additional Details</span>
                <FaAngleRight className="down-arrow" style={{transform: 'rotate(90deg)'}} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
