import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDash.css'; 

function UserDash() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/add-product" className="nav-link">Add Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/show-product" className="nav-link">Show Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/view-product" className="nav-link">View Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/upcoming-auction" className="nav-link">Upcoming Auction</Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">Wishlists</Link>
          </li>
          <li className="nav-item logout">
            <Link to="/login" className="nav-link logout-link">Logout</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <h1>Welcome to User Dashboard</h1>
      </div>
    </div>
  );
}

export default UserDash;
