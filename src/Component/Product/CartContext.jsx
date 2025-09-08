import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Lấy giỏ hàng từ localStorage khi load trang
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Lưu giỏ hàng vào localStorage khi thay đổi
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existingProduct = prev.find(item => item.id === product.id);
            if (existingProduct) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1}
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        })
    }
    return (
        <div>
            <CartContext.Provider value={{ cart , addToCart }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}
