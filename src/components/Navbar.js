import React from 'react';
import './Navbar.css';
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">ProPandit</div>

      <div class="inputBox_container">
        <IoSearchOutline className='icons' size={25} color='#B6B2A5' font/>
        <input class="inputBox" id="inputBox" type="text" placeholder="Search For Your Pooja" />
      </div>

      <nav>
        <ul className="navbar__links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <button className="navbar__button">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
