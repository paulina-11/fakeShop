import React, { useEffect, useState } from 'react'
import { ProductsApi } from '../api'
import CardProduct from './CardProduct'

const ProductsList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const getProductsList = async () => {
    try {
      setLoading(true)
      const res = await ProductsApi.get('/products')
      setProducts(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductsList()
  }, [])
  return (
    <div className='container__products'>
      {loading
        ? <p>Cargando...</p>
        : products.map((product) => (

          <CardProduct
            key={product.id}
            product={product}
          />

        ))}
    </div>
  )
}

export default ProductsList
