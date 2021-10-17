import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
    return (
        <div>
          <Navbar />
          <Header />
          <Categories />
          <Products />
        </div>
    )
}

export default Home
