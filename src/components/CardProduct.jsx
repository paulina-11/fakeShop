import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const CardProduct = ({ product }) => {
  return (
    <div className='cards'>
      <Link to={'/' + product.id} style={{ textDecoration: 'none', color: '#000' }}>
        <img className='cards__img' src={product.image} alt={product.title} />
        <h3 className='cards__title'>{product.title}</h3>
        <p className='cards__price'>$ {product.price}</p>
      </Link>
      <Button />
    </div>
  )
}

export default CardProduct
