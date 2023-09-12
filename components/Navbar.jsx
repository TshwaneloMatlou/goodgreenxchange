import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container border-2 p-5 bg-gray-50">
      <p className="logo">
        <Link href="/">GoodGreenXchange</Link> <br /> {/** Store Name */}
      </p>
        <div className='flex items-center gap-[50px] '>
            {/** Links to different pages of the store */}
            <ul className='flex items-center gap-[40px] cursor-pointer font-semibold'>
                <li><a href="../store/store">Store</a></li>
                <li><a href="/about/about">About</a></li>
                <li><a href="/services/services">Services</a></li>
                <li><a href="/contact/contact">Contact</a></li>
            </ul>
        </div>
      
      {/** Cart Button */}
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar