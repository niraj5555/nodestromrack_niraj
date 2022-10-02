import React from 'react'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import Navbar from '../components/Navbar'
import Navigater from "../components/Navigater";
import Banner from "../components/Banner";
import Products from "../components/products";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
       <Navbar/>
       <MainSection/>
        <Navigater/>
        <Banner/>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home