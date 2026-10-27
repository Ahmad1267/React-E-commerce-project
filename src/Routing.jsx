import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Layout from './Pages/Layout'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import GuestRoute from './Components/GuestRoute'
import Payment from './Pages/Payment'


function Routing() {
  return (
    <>
    <Routes>
        <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path= '/productdet/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<GuestRoute>
         <Login/>
        </GuestRoute>}/>
      <Route path='/signup' element={<GuestRoute>
        <Signup/>
        </GuestRoute>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/pay' element={<Payment/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default Routing