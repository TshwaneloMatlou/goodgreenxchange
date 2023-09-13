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
                <li><Link href="../store/store" > Store </Link></li>
                <li><Link href="/about/about" > About </Link></li>
                <li><Link href="/services/services" > Services </Link></li>
                <li><Link href="/contact/contact" > Contact </Link></li>
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