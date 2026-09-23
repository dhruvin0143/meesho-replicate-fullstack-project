import React from 'react';
import './CategoryBar.css';

const categories = [
  "Popular",
  "Kurti, Saree & Lehenga",
  "Women Western",
  "Lingerie",
  "Men",
  "Kids & Toys",
  "Home & Kitchen",
  "Beauty & Health",
  "Jewellery & Accessories",
  "Bags & Footwear",
  "Electronics",
  "Watches"
];

const CategoryBar = () => {
  return (
    <div className="category-bar">
      <div className="container category-container">
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <span>{category}</span>
              
              {/* Mega Menu only for "Popular" */}
              {category === "Popular" && (
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    {/* Left Column */}
                    <div className="mega-menu-left">
                      <div className="mega-menu-group active-group">
                        <span>Featured On Meesho</span>
                      </div>
                      <div className="mega-menu-group">
                        <span>Top Brands</span>
                      </div>
                      <div className="mega-menu-group">
                        <span>Shimla Apples</span>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="mega-menu-right">
                      <h4 className="mega-menu-heading">All Popular</h4>
                      <ul className="mega-menu-sublist">
                        <li>Jewellery</li>
                        <li>Men Fashion</li>
                        <li>Kids</li>
                        <li>Footwear</li>
                        <li>Beauty & Personal Care</li>
                        <li>Grocery</li>
                        <li>Electronics</li>
                        <li>Innerwear & Nightwear</li>
                        <li>Kitchen & Appliances</li>
                        <li>Bags & Luggage</li>
                        <li>Healthcare</li>
                        <li>Stationery & Office Supplies</li>
                        <li>Bike & Car</li>
                        <li>Furniture</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryBar;
