import React from 'react'
import { useForm } from 'react-hook-form'

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await fetch('https://67ee152e4387d9117bbf4f07.mockapi.io/api/v1/users')
      const users = await res.json()
      const user = users.find(u => u.email === data.email && u.password === data.password)

      if (user) {
        localStorage.setItem('userId', user.id)
        onLoginSuccess(user)
        onClose()
      } else {
        alert('Sai email hoặc mật khẩu')
      }
    } catch (err) {
      console.log(err)
      alert('Lỗi khi đăng nhập')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Đăng nhập</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              {...register('email', { required: 'Vui lòng nhập email' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              {...register('password', { required: 'Vui lòng nhập mật khẩu' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
