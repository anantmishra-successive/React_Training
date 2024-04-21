import React from 'react'
import { Route,BrowserRouter , Routes } from 'react-router-dom';
import Products from "./Products"
import Home from "./Home";
import AllProducts from './AllProducts';
const Links = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="product/:id" element={<Products/>}/>
            <Route path="products" element={<AllProducts/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Links