import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'react-feather'; // Assuming you're using react-feather for icons
import { CartContext } from './CartContext'; // Adjust the import path as necessary
import { useContext } from 'react';

const ProductIcon = () => {
    // const [cart, setCart] = React.useState([]);
    // const [quantity, setQuantity] = React.useState(1);
    // const removeFromCart = 0;
    // const updateQuantity = 0;
    const { addToCart } = useContext(CartContext);

    const product = {
        id: 1,
        name: "Rượu Remy Martin CLUB",
        price: 1230000,
        image:
            "https://bizweb.dktcdn.net/thumb/medium/100/022/044/products/ruou24.jpg?v=1445851659983",
    };


    return (
        <div>
            {/* <div className="p-6 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">🛒 Giỏ hàng của bạn</h2>
                {cart.length === 0 ? (
                    <p>Chưa có sản phẩm nào.</p>
                ) : (
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between border-b pb-3"
                            >
                                <span className="w-1/3">{item.name}</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="bg-gray-200 px-2 rounded"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        className="w-12 text-center border rounded"
                                        onChange={(e) =>
                                            updateQuantity(item.id, parseInt(e.target.value))
                                        }
                                    />
                                    <button
                                        className="bg-gray-200 px-2 rounded"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="w-1/4 text-right">
                                    {(item.price * item.quantity).toLocaleString()}₫
                                </span>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Xóa
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div> */}

            <div className="product-card">
                <img
                    src={product.image}
                    alt="Banner"
                    style={{ width: "auto", height: "auto" }}
                />
                <Link to="/ruou-remy-martin-club" className="product-link">
                    <p>{product.name}</p>
                </Link>
                <p className="product-price">
                    {product.price.toLocaleString("vi-VN")}đ
                </p>
                <button className="buy-btn" onClick={() => addToCart(product)}>
                    Mua hàng
                </button>
            </div>
        </div>
    );
}

export default ProductIcon;
