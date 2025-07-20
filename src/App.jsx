import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Home from './pages/home/home'
import Footer from './component/Footer/Footer'
import LoginPop from './component/LoginPop/LoginPop'
import PlaceOrder from './pages/placehOrder/placeOrder'


const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (<>
  {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
