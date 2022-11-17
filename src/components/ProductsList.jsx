import React, { useEffect, useState } from 'react'
import { ProductsApi } from '../api'
import CardProduct from './CardProduct'
import Pagination from './Pagination'

const ProductsList = () => {
  const [products, setProducts] = useState([])
  const totalProducts = products.length
  const [loading, setLoading] = useState(true)
  const [productPerPage, setProductPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * productPerPage
  const firstIndex = lastIndex - productPerPage

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
    <>
      <div className='container__products'>
        {loading
          ? <p>Cargando...</p>
          : products.map((product) => (

            <CardProduct
              key={product.id}
              product={product}
            />

          )).slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        productPerPage={productPerPage}
        setProductPerPage={setProductPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  )
}

export default ProductsList
