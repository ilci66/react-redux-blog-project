import React from 'react'
import './Item.css'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../slice/shopSlice'

const Item = ({ name, id, price}) => {
  const dispatch = useDispatch();

  return (
    <div className='item-cart'>
      <div className='color-box' style={{background: name}}></div>
      <p className='p-name'>{name}</p>
      <p className='p-price'>{price} $</p>
      <button onClick={() => dispatch(addItemToCart(id))} className='add-button'>Add to Cart</button>
    </div>
  )
}

export default Item