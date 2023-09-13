import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  // Retrieve state and functions from the context
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  // State to track whether the mobile menu is open or closed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`navbar-container p-5 bg-gray-50 md:p-8 lg:p-10 xl:p-12 ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div>
        {/* Logo */}
        <p>
          <Link href="/">GoodGreenXchange</Link>
        </p>
        {/* Mobile menu toggle button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile-responsive navigation links */}
      <div className={`navbar-links ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <ul className='flex flex-col-4 items-center gap-4 cursor-pointer font-semibold'>
          <li><Link href="/store/store">Store</Link></li>
          <li><Link href="/about/about">About</Link></li>
          <li><Link href="/services/services">Services</Link></li>
          <li><Link href="/contact/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Cart button */}
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {/* Show the cart when it's active */}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
