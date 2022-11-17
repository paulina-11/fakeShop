import React from 'react'
import Pagination from '../components/Pagination'
import ProductsList from '../components/ProductsList'

const LandingPage = () => {
  return (
    <div>
      <ProductsList />
      <Pagination />
    </div>
  )
}

export default LandingPage
