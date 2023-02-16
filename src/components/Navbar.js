import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='brand'>
            <Link to="/" className='navbar-links'>ACCOMMONDATION</Link>
          </div>
          <ul className='navbar-menu'>
            <li className='navbar-item'>
              <Link to="/" className='navbar-links'><i className="fa-regular fa-bookmark"></i></Link>
            </li>
            <li className='navbar-item'>
              <Link to="/" className='navbar-links'><i className="fa-regular fa-user"></i></Link>
            </li>
            <li className='navbar-item'>
              <Link to="/" className='navbar-links'><i className="fa-sharp fa-solid fa-gear"></i></Link>
            </li>
            <li className='navbar-item'>
              <Link to="/" className='navbar-links'>ENG</Link>
            </li>
            <li className='navbar-item'>
              <Link to="/" className='navbar-links'>AUD$</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;