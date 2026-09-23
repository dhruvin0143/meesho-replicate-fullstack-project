import React from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sort-section">
        <span className="sort-label">Sort by : </span>
        <span className="sort-value">Relevance</span>
        <FaChevronDown className="sort-icon" />
      </div>

      <div className="filters-header">
        <h3>FILTERS</h3>
        <p>1000+ Products</p>
      </div>

      <div className="filter-category">
        <div className="filter-category-header">
          <h4>Category</h4>
          <FaChevronUp className="filter-icon" />
        </div>
        
        <div className="filter-search">
          <FaSearch className="filter-search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <ul className="filter-list">
          <li className="filter-item">
            <input type="checkbox" id="tshirts" />
            <label htmlFor="tshirts">Women T-shirts</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" id="tops" />
            <label htmlFor="tops">Women Tops And Tunics</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" id="watches" />
            <label htmlFor="watches">Analog Watches</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" id="appliance" />
            <label htmlFor="appliance">Appliance Covers</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
