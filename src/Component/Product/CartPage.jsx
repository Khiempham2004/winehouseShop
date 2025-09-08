import React, { use, useContext } from 'react'
import { CartContext } from '../../Component/Product/CartContext';

export default function CartPage() {
    const {cart} = useContext(CartContext); 
    
  return (
    <div>
        <h2>🛒 Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x{" "}
              {item.price.toLocaleString("vi-VN")}đ
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
