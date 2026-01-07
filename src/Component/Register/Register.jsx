import React from 'react'
import { useState } from 'react'
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    // hàm kiểm tra dữ liệu trước khi submit
    const validate = (data) => {
        let newErrors = {};
        if (!formData.lastName.trim()) newErrors.lastName = 'Vui lòng nhập họ';
        if (!formData.firstName.trim()) newErrors.firstName = 'Vui lòng nhập tên';
        if (!formData.email) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }
        if (!formData.phone) {
            newErrors.phone = 'Vui lòng nhập số điện thoại';
        } else if (!/^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])[0-9]{7}$/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ';
        }
        if (!formData.password) {
            newErrors.password = 'Vui lòng nhập mật khẩu';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        // navigate('/login');
        // nếu không có lỗi, gửi dữ liệu
        if (Object.keys(newErrors).length === 0) {
            console.log("Dữ liệu đăng ký thành công : ", formData);
            alert('Đăng ký thành công!');
            // reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: ''
            });
        }
    };

    const handleRegisterAPI = async (e) => {
        e.preventDefault();
        try {
            const api = await axios.post('/http://localhost:8000/winehouse/register', formData );
            // console.log("Đăng ký thành công : ", api.data);
            console.log(formData);
            navigate('/login');
            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            return {
                success: true,
                message: 'Đăng ký thành công',
                data: api.data
            }
        } catch (error) {
            console.log("Đăng ký lỗi : ", error);
            alert('Đăng ký thất bại. Vui lòng thử lại.');
            return {
                success: false,
                message: error.response?.data?.message || 'Đăng ký thất bại',
                error
            }
        }
    }

    // const handleSubmitSuccess = () => {
    //     navigate('/login'); // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
    // };



    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        ĐĂNG KÝ TÀI KHOẢN
                    </h2>

                    <form onSubmit={handleRegisterAPI} className="space-y-4">
                        {/* Họ và tên */}
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">
                                    Họ *
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                                )}
                            </div>

                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">
                                    Tên *
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* Số điện thoại */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Số điện thoại *
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        {/* Mật khẩu */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Mật khẩu *
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password}</p>
                            )}
                        </div>

                        {/* Nút đăng ký */}
                        {/* <Link> */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                        >
                            Đăng ký
                        </button>
                        {/* </Link> */}
                    </form>

                    {/* Đăng nhập bằng MXH */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">Hoặc đăng nhập bằng</p>
                        <div className="flex justify-center gap-4 mt-3">
                            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Facebook
                            </button>
                            <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}