// Banner.jsx
import React from 'react'
import './Banner.css'

const Banner = ({text}) => {
  return (
    <div className='banner-wrapper'>
      <p className='banner-text'>{text}</p>
    </div>
  )
}

export default Banner