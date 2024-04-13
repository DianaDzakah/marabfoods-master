import React from 'react'
import Seller from '../sellers/Seller'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import ProductsPage from '../products'
import Footer from '../../components/footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ProductsPage/>
        <Footer/>
        {/* <Seller/> */}
        
        
        
    </div>
  )
}

export default LandingPage