import React from 'react'
import './InCart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, clearCart, selectCart, addItemToCart, decrementQuantity } from '../../slice/shopSlice'
import { Link } from 'react-router-dom'

const InCart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(selectCart)

  return (
    <div className='cart-items-container'>
      {cart.length === 0 ? <p className='empty-cart-text'>Your cart appears to be empty,<Link to="/" className='home-button'> wanna see the items ?</Link></p> : <>
        <ul className='cart-items-ul'>
          {cart.map(i => <li className='cart-item-li' key={i.id}>
            {i.name} 
            <div className='right-align'>
              <button onClick={() => dispatch(addItemToCart(i.id))}>+</button> {i.quantity} <button onClick={() => dispatch(decrementQuantity(i.id))}>-</button><button onClick={() => dispatch(removeFromCart(i.id))} className='remove-button'>Remove</button>
            </div>
          </li>)}
        </ul>
        <button onClick={() => dispatch(clearCart())} className='clear-cart-button'>Clear Cart</button>
      </>
      }
    </div>
  )
}

export default InCart