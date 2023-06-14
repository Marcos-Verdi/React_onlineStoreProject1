import React from 'react'
import Announcements from './Announcements'
import Navbar from './Navbar'
import Slider from './Slider'
import Categories from './Categories'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'
import "./index.css"


export default function Home() {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}
