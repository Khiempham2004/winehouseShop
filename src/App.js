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


function App() {
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Giỏ hàng
  const [quantity, setQuantity] = useState(1); // Số lượng sản phẩm

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity }]);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Following />} />
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
        <Route path='/product-detail' element={
          <>
            <Navbar />
            <ProductDetail />
          </>
        } />
        {/* <Route path='/productIcon' element={<ProductIcon />} /> */}
        {/* <ProductDetail  onAddToCart={handleAddToCart} /> */}
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
