import React from 'react'
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        setCart((prevCart) => {
            // check xem da co sanpham chua
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantrity: item.quantity + product.quantity }
                        : item
                );
            }
            return [...prevCart, { ...product, quantify: 1 }];
        });
    };

    // xóa product
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    const updateQuantify = (id, newQuantify) => {
        if (newQuantify < 1) return;
        setCart((item) =>
            item.id === id ? { ...item, quantify: newQuantify } : item
        );
    };


    // Lấy giỏ hàng từ localStorage khi load trang
    // useEffect(() => {
    //     const storedCart = localStorage.getItem("cart");
    //     if (storedCart) {
    //         setCart(JSON.parse(storedCart));
    //     }
    // }, []);

    // // Lưu giỏ hàng vào localStorage khi thay đổi
    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    // }, [cart]);

    // const addToCart = (product) => {
    //     setCart((prev) => {
    //         const existingProduct = prev.find(item => item.id === product.id);
    //         if (existingProduct) {
    //             return prev.map(item =>
    //                 item.id === product.id
    //                     ? { ...item, quantity: item.quantity + 1}
    //                     : item
    //             );
    //         } else {
    //             return [...prev, { ...product, quantity: 1 }];
    //         }
    //     })
    // }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantify }}>
            {children}
        </CartContext.Provider>
    )
}
