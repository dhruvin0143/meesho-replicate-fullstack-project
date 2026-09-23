import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Lowest Prices<br/>Best Quality Shopping</h1>
          <p>Over 50 Lakh+ Products | Free Delivery | Cash on Delivery</p>
          <button className="btn-primary hero-btn">
            Download the App
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
            alt="Shopping Promotion" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
