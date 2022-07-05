import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { selectCart } from '../../slice/shopSlice';

const Navbar = () => {

  const cart = useSelector(selectCart)
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    if(cart.length >= 0){
      let n = 0;
      cart.map(x => n += x.quantity)
      setCartQuantity(n)
    }
  }, [cart, cartQuantity])

  return (<>
    <div className='navbar-wrapper'>
      <Link className='nav-link' to="/">Home</Link>
      <Link className='nav-link' to="/cart">Cart <span className='length-badge'>{cartQuantity}</span></Link>
    </div>
    <Outlet />
  </>)
}

export default Navbar