"use client";
import React, { useState } from 'react';
import './navbar.css';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <img
          src="https://masterpramod.com/wp-content/uploads/2023/09/cropped-LHBS.png"
          alt="LHBS Logo"
        />
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <img src="burger-list-menu-navigation-svgrepo-com.svg" alt="Menu" width="18" height="18" style={{ display: 'block' }} />
        </button>
        {open && <div className="nav-backdrop" onClick={handleLinkClick} />}
        <ul className={`nav-list${open ? ' active' : ''}`}>
          <li>
            <Link href="/" className="navbutton" id="homebutton" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link href="/courses" className="navbutton" onClick={handleLinkClick}>Courses</Link>
          </li>
          <li>
            <Link href="/joinus" className="navbutton" onClick={handleLinkClick}>Join Us</Link>
          </li>
          <li>
            <Link href="/coupons" className="navbutton" onClick={handleLinkClick}>Coupons</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


