// Navbar
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feature">Features</Link>
        </li>
        <li>
          <Link to="/products" >Products</Link>
        </li>
        <li>
          <Link to="/reviews" >Reviews</Link>
        </li>
        <li>
          <Link to="/blogs" >Blogs</Link>
        </li>
        <li >
          <Link to="/login" >Login</Link>
        </li>
      </ul>
    </nav>
  );
}
