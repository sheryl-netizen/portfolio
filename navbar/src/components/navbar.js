import React from 'react';
import './navbar.css'; // You can create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#my work">My Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
