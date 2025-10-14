import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [forgotEmail, setForgotEmail] = useState('')
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    alert(`Đăng nhập với email: ${email} và mật khẩu: ${password}`)
  };

  const handleForgot = (e) => {
    e.preventDefault()
    alert(`Yêu cầu thay đổi mật khẩu cho email: ${forgotEmail}`)
  };

  const handleSubmit = () => {
    navigate('/');
  }


  return (
    <div>
      <div className="max-w-5xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-gray-500">
          <Link to="/" className=' hover:text-yellow-600'>Trang chủ</Link>
          <span className="text-yellow-500"> | Đăng nhập tài khoản</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">ĐĂNG NHẬP TÀI KHOẢN</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Login Form */}
          <form
            onSubmit={handleLogin}
            className="border p-6 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-gray-600">Nếu bạn đã có tài khoản, đăng nhập tại đây.</p>

            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                className="w-full border rounded p-2 mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Mật khẩu *</label>
              <input
                type="password"
                className="w-full border rounded p-2 mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            >
              Đăng nhập
            </button>

            <a href="/register" className="ml-4 text-blue-600">
              Đăng ký
            </a>

            {/* Social login */}
            <div className="mt-6">
              <p className="text-center text-gray-600 mb-3">Hoặc đăng nhập bằng</p>
              <div className="flex gap-4 justify-center">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
                  Facebook
                </button>
                <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded">
                  Google
                </button>
              </div>
            </div>
          </form>

          {/* Forgot Password */}
          <form
            onSubmit={handleForgot}
            className="border p-6 rounded-lg shadow-sm space-y-4"
          >
            <p className="text-gray-600">
              Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.
            </p>

            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                className="w-full border rounded p-2 mt-1"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            >
              Lấy lại mật khẩu
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
