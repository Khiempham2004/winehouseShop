import React, { useContext } from 'react'
import { CartContext } from '../../Component/Product/CartContext';
import '../Product/Product.css'
import { Link } from 'react-router-dom';
export default function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div className='cart_container'>
      <div className='cart_path'>
        <Link to="/">
          <p className='home'>Trang chủ</p>
        </Link>
        <span className='divider'> | </span>
        <p className='cart_page'>Giỏ hàng</p>
      </div>

      <h2>🛒 Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="60" />
              {item.name} - {item.quantity} x{" "}
              {item.price.toLocaleString("vi-VN")}₫
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
