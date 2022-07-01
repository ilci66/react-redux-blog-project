import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../item/Item'
import { selectItems } from '../../slice/shopSlice'
import './Items.css'

const Items = () => {

  const items = useSelector(selectItems);

  return (
    <div className='items-container'>
      {items.map(i => <Item name={i.name} id={i.id} price={i.price} key={i.id}/>)}
    </div>
  )
}

export default Items