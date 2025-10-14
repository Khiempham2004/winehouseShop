import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Following from './pages/Following/Following.jsx';
import ProductDetail from './Component/Product/ProductDetail.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Introduct from './Component/Introduct/Introduct.jsx';
import { CartProvider } from './Component/Product/CartContext.jsx';
import CartPage from './Component/Product/CartPage.jsx';
import MixedWine from './Component/ProductcardWine/MixedWine.js';



function App() {
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Giỏ hàng
  const [quantity, setQuantity] = useState(1); // Số lượng sản phẩm



  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Following />} />
        <Route path="/gioithieu" element={<>
          <Navbar />
          <Introduct />
          <Footer />
        </>} />
        <Route path="/login" element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        } />
        <Route path='/register' element={
          <>
            <Navbar />
            <Register />
            <Footer />
          </>
        } />

        <Route path='/product-detail' element={<>
          <Navbar />
          <ProductDetail />
        </>} />

        <Route path='/cart' element={<>
          <Navbar />
          <CartPage />
          <Footer />
        </>} />

        <Route path='/ruou-pha' element={<>
          <Navbar />
          <MixedWine />
          <Footer />
        </>} />

        <Route path='/footer' element={<Footer />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
