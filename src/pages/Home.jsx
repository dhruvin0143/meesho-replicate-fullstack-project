import React from 'react';
import Header from '../components/Header/Header';
import CategoryBar from '../components/CategoryBar/CategoryBar';
import Sidebar from '../components/Sidebar/Sidebar';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import { products } from '../data/products';
import './Home.css';

const topCategories = [
  { name: "Ethnic Wear", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&auto=format&fit=crop&q=60" },
  { name: "Western Dresses", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&auto=format&fit=crop&q=60" },
  { name: "Menswear", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&auto=format&fit=crop&q=60" },
  { name: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=60" },
  { name: "Home Decor", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&auto=format&fit=crop&q=60" },
  { name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=200&auto=format&fit=crop&q=60" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=200&auto=format&fit=crop&q=60" },
  { name: "Grocery", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=60" }
];

const Home = () => {
  return (
    <>
      <Header />
      <CategoryBar />
      
      {/* Top Banner & Category Circles section */}
      <div className="home-top-section container">
        <div className="trust-banner">
          <div className="trust-item">
            <span>↩️</span> 7 Days Easy Return
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span>💵</span> Cash on Delivery
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span>🏷️</span> Lowest Prices
          </div>
        </div>

        <div className="round-categories">
          {topCategories.map((cat, index) => (
            <div key={index} className="round-category-item">
              <div className="round-category-img-container">
                <img src={cat.image} alt={cat.name} />
              </div>
              <span className="round-category-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="home-container container">
        <h2 className="page-heading">Products For You</h2>
        <div className="home-layout">
          <Sidebar />
          <div className="home-main">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
