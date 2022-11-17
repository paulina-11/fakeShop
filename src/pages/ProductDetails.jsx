import React, { useState, useEffect } from 'react'
import { ProductsApi } from '../api'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [product, setProduct] = useState([])

  const { productId } = useParams()

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await ProductsApi.get('/products/' + productId)
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [productId])

  return (
    <div className='container'>
      <img className='container__img col' src={product.image} alt={product.title} />
      <div className='container__details col'>
        <h3 className='container__title'>{product.title}</h3>
        <p className='container__description'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetails
