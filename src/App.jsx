
import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Components/nav/Nav'
import Footer from './Components/Footer/Footer'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>


        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
