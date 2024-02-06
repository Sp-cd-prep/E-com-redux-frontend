// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import styles

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bollywood">Bollywood</Link></li>
        <li><Link to="/hollywood">Hollywood</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
