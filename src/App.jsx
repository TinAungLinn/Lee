import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Booking from './Pages/Booking'
import Contact from './Pages/Contact'
import DetailProduct from './Components/DetailProduct'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:id' element={<DetailProduct/>}/>
      </Routes>
    </div>
  )
}

export default App