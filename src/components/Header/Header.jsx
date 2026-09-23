import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          meesho
        </Link>
        
        <div className="search-wrapper">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" />
          </div>
        </div>

        <nav className="header-nav">
          <div className="nav-text-item">
            <span>Become a Supplier</span>
          </div>
          <div className="nav-divider"></div>
          <div className="nav-text-item">
            <span>Investor Relations</span>
          </div>
          <div className="nav-divider"></div>
          <div className="nav-item">
            <FaUser className="nav-icon" />
            <span>Profile</span>
          </div>
          <Link to="/cart" className="nav-item cart-item">
            <div className="cart-icon-wrapper">
              <BsCart2 className="nav-icon" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            <span>Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
