import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import ProductDetails from '../pages/ProductDetails'

const MyRoutes = () => {
  return (

    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route path='/:productId' element={<ProductDetails />} />
      <Route path='*' element={<ProductDetails />} />
    </Routes>

  )
}

export default MyRoutes
